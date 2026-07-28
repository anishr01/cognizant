using EFCoreRetailStore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace EFCoreRetailStore.Data;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<Category> Categories { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: false)
                .AddEnvironmentVariables()
                .Build();

            var conn = config.GetConnectionString("DefaultConnection")
                       ?? Environment.GetEnvironmentVariable("DefaultConnection");

            if (!string.IsNullOrWhiteSpace(conn))
            {
                // If the connection string looks like MySQL (contains common MySQL keywords), use MySQL provider
                if (conn.Contains("Server=", StringComparison.OrdinalIgnoreCase) &&
                    (conn.Contains("Port=", StringComparison.OrdinalIgnoreCase) || conn.Contains("Uid=", StringComparison.OrdinalIgnoreCase) || conn.Contains("User=", StringComparison.OrdinalIgnoreCase) || conn.Contains("Password=", StringComparison.OrdinalIgnoreCase)))
                {
                    var serverVersion = ServerVersion.AutoDetect(conn);
                    optionsBuilder.UseMySql(conn, serverVersion);
                }
                else
                {
                    optionsBuilder.UseSqlServer(conn);
                }
            }
            else
            {
                throw new InvalidOperationException("Database connection string not found. Set 'ConnectionStrings:DefaultConnection' in appsettings.json or the 'DefaultConnection' environment variable.");
            }
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.Property(category => category.Name)
                .IsRequired()
                .HasMaxLength(100);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(product => product.Name)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(product => product.Price)
                .HasColumnType("decimal(18,2)");

            entity.HasOne(product => product.Category)
                .WithMany(category => category.Products)
                .HasForeignKey(product => product.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });
    }
}