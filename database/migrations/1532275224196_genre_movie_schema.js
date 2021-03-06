'use strict'

const Schema = use('Schema')

class GenreMovieSchema extends Schema {
  up () {
    this.create('genre_movie', (table) => {
      table.increments()
      table.integer('movie_id').unsigned()
      table.foreign('movie_id').references('movies.id')
      table.integer('genre_id').unsigned()
      table.foreign('genre_id').references('genres.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('genre_movie')
  }
}

module.exports = GenreMovieSchema
