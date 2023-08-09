export interface MoviesProps {
  id: number
  backdrop_path: string
  poster_path: string
  title: string
  release_date: string
  vote_average: number
  original_title: string
  original_language: string
  overview: string
  vote_count: number
  popularity: number
}

interface SpokenLanguagesProps {
  english_name: string
  iso_639_1: string
  name: string
}

interface ProductionCountriesProps {
  iso_3166_1: string
  name: string
}

interface ProductionCompaniesProps {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
interface GenresProps {
  id: number
  name: string
}
export interface MovieFullProps {
  backdrop_path: string
  budget: number
  genres: Array<GenresProps>
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<ProductionCompaniesProps>
  production_countries: Array<ProductionCountriesProps>
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<SpokenLanguagesProps>
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}
