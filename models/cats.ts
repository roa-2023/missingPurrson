export interface MissingCat {
  catId: number
  microchip: number
  microChipNumber: string
  userIdMc: number
  catName: string
  breed: string
  color: string
  description: string
  dateLost: Date
  location: string
  missingCatPhone: string
  missingCatEmail: string
  missingImageUrl: string
  catMissing: boolean
}

export interface NewMissingCat {
  microchip: number
  microChipNumber: string
  userIdMc: number
  catName: string
  breed: string
  color: string
  description: string
  dateLost: Date
  location: string
  missingCatPhone: string
  missingCatEmail: string
  missingImageUrl: string
  catMissing: boolean
}

export interface SightedCat {
  sightedCatId: number
  userIdSc: number
  catIdMc: number
  color: string
  description: string
  dateSeen: Date
  location: string
  sightedCatPhone: string
  sightedCatEmail: string
  sightedImageUrl: string
}

export interface NewSightedCat {
  userIdSc: number
  catIdMc: number
  color: string
  description: string
  dateSeen: Date
  location: string
  sightedCatPhone: string
  sightedCatEmail: string
  sightedImageUrl: string
}
