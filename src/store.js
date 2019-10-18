import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'characters': {
      'kritanta': {
        'alignment': 'Chaotic Neutral',
        'background': 'Hermit',
        'base': {
          'Strength': 15,
          'Dexterity': 10,
          'Constitution': 15,
          'Intelligence': 8,
          'Wisdom': 12,
          'Charisma': 15
        },
        'class': 'Sorcerer',
        'languages': [
          'Common',
          'Celestial',
          'Abyssal'
        ],
        'level': 4,
        'proficiency-bonus': '+3',
        'race': 'Aasimar',
        'skills': {
          'Acrobatics': 0,
          'Animal Handling': 1,
          'Arcana': -1,
          'Athletics': 2,
          'Deception': 2,
          'History': -1,
          'Insight': 4,
          'Intimidation': 5,
          'Investigation': -1,
          'Medicine': 4,
          'Nature': -1,
          'Perception': 1,
          'Performance': 2,
          'Persuation': 2,
          'Religion': 2,
          'Slieght of Hand': 0,
          'Stealth': 0,
          'Survival': 1
        },
        'weapon': 'Quarterstaff'
      },
      'sariel': {
        'alignment': 'Chaotic Neutral',
        'background': 'Sage',
        'base': {
          'Strength': 14,
          'Dexterity': 10,
          'Constitution': 14,
          'Intelligence': 15,
          'Wisdom': 8,
          'Charisma': 15
        },
        'class': 'Warlock',
        'languages': [
          'Common',
          'Abyssal',
          'Deep Speech',
          'Giant'
        ],
        'level': 4,
        'proficiency-bonus': '+3',
        'race': 'Goliath',
        'skills': {
          'Acrobatics': 0,
          'Animal Handling': -1,
          'Arcana': 4,
          'Athletics': 4,
          'Deception': 4,
          'History': 4,
          'Insight': -1,
          'Intimidation': 2,
          'Investigation': 4,
          'Medicine': -1,
          'Nature': 2,
          'Perception': -1,
          'Performance': 2,
          'Persuation': 2,
          'Religion': 2,
          'Slieght of Hand': 0,
          'Stealth': 0,
          'Survival': -1
        },
        'weapon': 'Shortbow'
      },
      'ea': {

      },
      'rhogar': {

      },
      'travok': {

      },
      'indigo': {

      }
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    characters: state => {
      return state.characters
    }
  }
})
