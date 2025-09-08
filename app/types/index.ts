export interface Timestamps {
  created_at: string
  updated_at: string
}

export interface IProvinsi extends Timestamps {
  code: string
  name: string
  is_active: number
}
