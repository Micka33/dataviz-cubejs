cube(`Covid`, {
  sql: `
    SELECT
      *
    FROM
      bigquery-public-data.covid19_jhu_csse.summary`
  ,

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
    }
  },

  dimensions: {
    country_region: {
      sql: `country_region`,
      type: `string`
    }
  }
});
