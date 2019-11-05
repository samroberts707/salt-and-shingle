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
        'name': 'Kritanta',
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
        'obj': 'kritanta.obj',
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
        'name': 'Sariel',
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
        'obj': 'sariel.obj',
        'weapon': 'Shortbow'
      },
      'ea': {
        'alignment': 'Chaotic Good',
        'background': 'Noble',
        'base': {
          'Strength': 12,
          'Dexterity': 14,
          'Constitution': 10,
          'Intelligence': 14,
          'Wisdom': 8,
          'Charisma': 18
        },
        'class': 'Bard',
        'languages': [
          'Common',
          'Infernal',
          'Elvish'
        ],
        'level': 4,
        'name': 'Ea',
        'proficiency-bonus': '+2',
        'race': 'Tiefling',
        'skills': {
          'Acrobatics': 3,
          'Animal Handling': 0,
          'Arcana': 3,
          'Athletics': 2,
          'Deception': 8,
          'History': 4,
          'Insight': 1,
          'Intimidation': 6,
          'Investigation': 4,
          'Medicine': 0,
          'Nature': 3,
          'Perception': 0,
          'Performance': 6,
          'Persuation': 8,
          'Religion': 3,
          'Slieght of Hand': 3,
          'Stealth': 4,
          'Survival': 0
        },
        'obj': 'ea.obj',
        'weapon': 'Rapier'
      },
      'rhogar': {
        'alignment': 'Lawful Neutral',
        'background': 'Soldier',
        'base': {
          'Strength': 16,
          'Dexterity': 12,
          'Constitution': 15,
          'Intelligence': 10,
          'Wisdom': 8,
          'Charisma': 14
        },
        'class': 'Paladin',
        'languages': [
          'Common',
          'Draconic'
        ],
        'level': 4,
        'name': 'Rhogar',
        'proficiency-bonus': '+2',
        'race': 'Dragonborn',
        'skills': {
          'Acrobatics': 1,
          'Animal Handling': -1,
          'Arcana': 0,
          'Athletics': 5,
          'Deception': 2,
          'History': 0,
          'Insight': 1,
          'Intimidation': 4,
          'Investigation': 0,
          'Medicine': -1,
          'Nature': 0,
          'Perception': -1,
          'Performance': 2,
          'Persuation': 4,
          'Religion': 0,
          'Slieght of Hand': 1,
          'Stealth': 1,
          'Survival': -1
        },
        'obj': 'rhogar.obj',
        'weapon': 'Great Sword'
      },
      'travok': {
        'alignment': 'Chaotic Neutral',
        'background': 'Mason',
        'base': {
          'Strength': 17,
          'Dexterity': 12,
          'Constitution': 16,
          'Intelligence': 8,
          'Wisdom': 10,
          'Charisma': 13
        },
        'class': 'Barbarian',
        'languages': [
          'Common',
          'Dwarfish',
          'Elvish'
        ],
        'level': 4,
        'name': 'Travok',
        'proficiency-bonus': '+2',
        'race': 'Dwarf',
        'skills': {
          'Acrobatics': 1,
          'Animal Handling': 0,
          'Arcana': -1,
          'Athletics': 5,
          'Deception': 1,
          'History': 2,
          'Insight': 2,
          'Intimidation': 1,
          'Investigation': -1,
          'Medicine': 0,
          'Nature': -1,
          'Perception': 2,
          'Performance': 1,
          'Persuation': 3,
          'Religion': -1,
          'Slieght of Hand': 1,
          'Stealth': 1,
          'Survival': 0
        },
        'obj': 'travok.obj',
        'weapon': 'Battle Axes'
      },
      'dusty': {
        'alignment': 'Chaotic Good',
        'background': 'Entertainer',
        'base': {
          'Strength': 8,
          'Dexterity': 11,
          'Constitution': 15,
          'Intelligence': 12,
          'Wisdom': 16,
          'Charisma': 14
        },
        'class': 'Druid',
        'languages': [
          'Common',
          'Druidic'
        ],
        'level': 4,
        'name': 'Dusty',
        'proficiency-bonus': '+2',
        'race': 'Air Genasi',
        'skills': {
          'Acrobatics': 2,
          'Animal Handling': 3,
          'Arcana': 1,
          'Athletics': -1,
          'Deception': 2,
          'History': 1,
          'Insight': 5,
          'Intimidation': 2,
          'Investigation': 1,
          'Medicine': 3,
          'Nature': 1,
          'Perception': 5,
          'Performance': 2,
          'Persuation': 4,
          'Religion': 1,
          'Slieght of Hand': 0,
          'Stealth': 0,
          'Survival': 3
        },
        'obj': 'dusty.obj',
        'weapon': 'Quaterstaff'
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
