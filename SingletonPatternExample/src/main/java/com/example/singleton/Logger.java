package com.example.singleton;

public final class Logger {
    private static volatile Logger instance;

    private Logger() {
        // Private constructor prevents instantiation from other classes
    }

    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("[LOGGER] " + message);
    }
}
