import { Router } from 'express'
import * as db from '../db/db-cats'

const router = Router()

//GET localhost:5173/api/v1/sightedcats/
router.get('/', async (req, res) => {
  try {
    const sightedCats = await db.getAllSightedCatsDb()
    //console.log(cats)
    res.json(sightedCats)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


// GET localhost:5173/api/v1/sightedcats/singlecat/sighting/:id
router.get('/singlecat/sighting/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const sightedCats = await db.getOneSightedCatDb(id)
    //console.log(cats)
    res.json(sightedCats)
    if (!sightedCats) {
      res.status(404).json({ error: 'id could not be found' })
      return sightedCats
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
