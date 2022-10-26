import { heroes } from "../data/heros"

export const getHeroById = (heroId) => {
    
    return  heroes.find( hero => hero.id === heroId )

}