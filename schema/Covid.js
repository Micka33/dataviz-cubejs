cube(`Covid`, {
  title: 'Summary COVID-19 cases',
  description: 'Summary COVID-19 cases, aggregated by country/region and province/state. See the original source files here: https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/',
  sql: `
    SELECT
      *
    FROM
      bigquery-public-data.covid19_jhu_csse.summary
  `,

  refreshKey: {
    sql: `
      SELECT
        count(*)
      FROM
        bigquery-public-data.covid19_jhu_csse.summary`
  },

  measures: {
    count: {
      type: `count`
    },

    confirmed: {
      sql: `confirmed`,
      type: `sum`,
      title: 'Number of Covid19 cases'
    },

    deaths: {
      sql: `deaths`,
      type: `sum`,
      title: 'Number of deaths due to Covid19'
    },

    recovered: {
      sql: `recovered`,
      type: `sum`,
      title: 'Number of healed people'
    },

    active: {
      sql: `active`,
      type: `sum`
    }
  },

  dimensions: {
    country: {
      sql: `country_region`,
      type: `string`
    },
    date: {
      sql: `TIMESTAMP(date)`,
      type: `time`
    }
  }
});
