import styles from './CohortDetails.module.css'

const cohorts = [
  {
    code: 'INTADMFE10',
    title: '.NET FSD',
    startedOn: '22-Feb-2022',
    currentStatus: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose',
  },
  {
    code: 'ADM21F014',
    title: 'Java FSD',
    startedOn: '10-Sep-2021',
    currentStatus: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith',
  },
  {
    code: 'CDBE21025',
    title: 'Java FSD',
    startedOn: '24-Dec-2021',
    currentStatus: 'Ongoing',
    coach: 'Aathma',
    trainer: 'John Doe',
  },
]

function CohortDetails() {
  return (
    <main className={styles.dashboard}>
      <section className={styles.panel}>
        <h1 className={styles.heading}>Cohorts Details</h1>

        <div className={styles.cards}>
          {cohorts.map((cohort) => {
            const statusClass =
              cohort.currentStatus.toLowerCase() === 'ongoing'
                ? styles.ongoing
                : styles.other

            return (
              <div key={cohort.code} className={styles.box}>
                <h3 className={styles.cohortName}>
                  {cohort.code} - {cohort.title}
                </h3>

                <dl className={styles.details}>
                  <div>
                    <dt>Started On</dt>
                    <dd>{cohort.startedOn}</dd>
                  </div>
                  <div>
                    <dt>Current Status</dt>
                    <dd className={statusClass}>{cohort.currentStatus}</dd>
                  </div>
                  <div>
                    <dt>Coach</dt>
                    <dd>{cohort.coach}</dd>
                  </div>
                  <div>
                    <dt>Trainer</dt>
                    <dd>{cohort.trainer}</dd>
                  </div>
                </dl>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default CohortDetails