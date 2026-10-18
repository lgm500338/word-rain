import { WordRole } from '../types/game';

export interface EnglishWordEntry {
  pattern: string;
  canonical: string;
  role: WordRole;
  tier: number;
  accepted: string[];
}

export const ENGLISH_STANDALONE_WORDS: EnglishWordEntry[] = [
  // ==========================================
  // --- Tier 1: 3~4 letter words (Level 1+) ---
  // ==========================================
  { pattern: 'c__', canonical: 'cat', role: 'standalone', tier: 1, accepted: ['cat', 'cup', 'car', 'cow', 'cap'] },
  { pattern: 'd__', canonical: 'dog', role: 'standalone', tier: 1, accepted: ['dog', 'day', 'dot', 'dry'] },
  { pattern: 's__', canonical: 'sun', role: 'standalone', tier: 1, accepted: ['sun', 'sea', 'sky', 'six'] },
  { pattern: 'b__', canonical: 'bus', role: 'standalone', tier: 1, accepted: ['bus', 'box', 'boy', 'bed'] },
  { pattern: 'f__', canonical: 'fox', role: 'standalone', tier: 1, accepted: ['fox', 'fly', 'fan', 'fit'] },
  { pattern: 'h__', canonical: 'hat', role: 'standalone', tier: 1, accepted: ['hat', 'hot', 'hop', 'hug'] },
  { pattern: 'm__', canonical: 'map', role: 'standalone', tier: 1, accepted: ['map', 'man', 'mud'] },
  { pattern: 'p__', canonical: 'pen', role: 'standalone', tier: 1, accepted: ['pen', 'pig', 'pot', 'pie'] },
  { pattern: 'r__', canonical: 'red', role: 'standalone', tier: 1, accepted: ['red', 'run', 'row'] },
  { pattern: 's___', canonical: 'star', role: 'standalone', tier: 1, accepted: ['star', 'snow', 'sand', 'ship', 'song'] },
  { pattern: 'b___', canonical: 'book', role: 'standalone', tier: 1, accepted: ['book', 'boat', 'bird', 'blue', 'ball'] },
  { pattern: 'f___', canonical: 'fish', role: 'standalone', tier: 1, accepted: ['fish', 'fire', 'food', 'frog', 'fast'] },
  { pattern: 't___', canonical: 'tree', role: 'standalone', tier: 1, accepted: ['tree', 'time', 'town', 'team'] },
  { pattern: 'm___', canonical: 'moon', role: 'standalone', tier: 1, accepted: ['moon', 'milk', 'mint', 'mars'] },
  { pattern: 'l___', canonical: 'lion', role: 'standalone', tier: 1, accepted: ['lion', 'lake', 'leaf', 'love'] },
  { pattern: 'r___', canonical: 'rose', role: 'standalone', tier: 1, accepted: ['rose', 'rain', 'ring', 'road'] },
  { pattern: 'k___', canonical: 'king', role: 'standalone', tier: 1, accepted: ['king', 'kite', 'keep'] },
  { pattern: 'h___', canonical: 'home', role: 'standalone', tier: 1, accepted: ['home', 'hand', 'hope', 'hill'] },
  { pattern: 'b___', canonical: 'baby', role: 'standalone', tier: 1, accepted: ['baby', 'bear', 'bell'] },
  { pattern: 'd___', canonical: 'duck', role: 'standalone', tier: 1, accepted: ['duck', 'door', 'deer'] },
  { pattern: 'w___', canonical: 'wind', role: 'standalone', tier: 1, accepted: ['wind', 'wave', 'warm'] },
  { pattern: 'g___', canonical: 'gold', role: 'standalone', tier: 1, accepted: ['gold', 'game', 'girl'] },
  { pattern: 'c___', canonical: 'cool', role: 'standalone', tier: 1, accepted: ['cool', 'cake', 'city', 'corn'] },
  { pattern: 'l___', canonical: 'leaf', role: 'standalone', tier: 1, accepted: ['leaf', 'line', 'luck'] },
  { pattern: 'r___', canonical: 'rock', role: 'standalone', tier: 1, accepted: ['rock', 'roof', 'rope'] },
  { pattern: 'p___', canonical: 'park', role: 'standalone', tier: 1, accepted: ['park', 'pool', 'path'] },

  // ==========================================
  // --- Tier 2: 5~6 letter words (Level 10+) ---
  // ==========================================
  { pattern: 'a____', canonical: 'apple', role: 'standalone', tier: 2, accepted: ['apple', 'alone', 'arrow', 'actor'] },
  { pattern: 'w____', canonical: 'water', role: 'standalone', tier: 2, accepted: ['water', 'world', 'white', 'watch'] },
  { pattern: 'm____', canonical: 'music', role: 'standalone', tier: 2, accepted: ['music', 'magic', 'maple', 'model'] },
  { pattern: 'b____', canonical: 'bread', role: 'standalone', tier: 2, accepted: ['bread', 'beach', 'brave', 'brown'] },
  { pattern: 'c____', canonical: 'cloud', role: 'standalone', tier: 2, accepted: ['cloud', 'clean', 'clock', 'candy'] },
  { pattern: 'g____', canonical: 'green', role: 'standalone', tier: 2, accepted: ['green', 'great', 'grass'] },
  { pattern: 'h____', canonical: 'horse', role: 'standalone', tier: 2, accepted: ['horse', 'house', 'heart', 'hotel'] },
  { pattern: 'n____', canonical: 'night', role: 'standalone', tier: 2, accepted: ['night', 'noble', 'north'] },
  { pattern: 'o____', canonical: 'ocean', role: 'standalone', tier: 2, accepted: ['ocean', 'onion', 'opera'] },
  { pattern: 'p____', canonical: 'party', role: 'standalone', tier: 2, accepted: ['party', 'peace', 'piano', 'puppy'] },
  { pattern: 'q____', canonical: 'queen', role: 'standalone', tier: 2, accepted: ['queen', 'quick', 'quiet'] },
  { pattern: 's____', canonical: 'smile', role: 'standalone', tier: 2, accepted: ['smile', 'sweet', 'space', 'storm'] },
  { pattern: 't____', canonical: 'table', role: 'standalone', tier: 2, accepted: ['table', 'tiger', 'train', 'taste'] },
  { pattern: 'c_____', canonical: 'coffee', role: 'standalone', tier: 2, accepted: ['coffee', 'camera', 'cloudy', 'circle'] },
  { pattern: 's_____', canonical: 'summer', role: 'standalone', tier: 2, accepted: ['summer', 'spring', 'silver', 'silent'] },
  { pattern: 'w_____', canonical: 'winter', role: 'standalone', tier: 2, accepted: ['winter', 'window', 'warmth'] },
  { pattern: 'f_____', canonical: 'flower', role: 'standalone', tier: 2, accepted: ['flower', 'forest', 'friend'] },
  { pattern: 'p_____', canonical: 'planet', role: 'standalone', tier: 2, accepted: ['planet', 'palace', 'purple'] },
  { pattern: 'g_____', canonical: 'garden', role: 'standalone', tier: 2, accepted: ['garden', 'guitar', 'golden'] },
  { pattern: 'b_____', canonical: 'banana', role: 'standalone', tier: 2, accepted: ['banana', 'butter', 'bridge'] },
  { pattern: 'o_____', canonical: 'orange', role: 'standalone', tier: 2, accepted: ['orange', 'orchid', 'oxford'] },
  { pattern: 't_____', canonical: 'travel', role: 'standalone', tier: 2, accepted: ['travel', 'target', 'ticket'] },
  { pattern: 'd_____', canonical: 'dragon', role: 'standalone', tier: 2, accepted: ['dragon', 'dinner', 'doctor'] },
  { pattern: 'c_____', canonical: 'castle', role: 'standalone', tier: 2, accepted: ['castle', 'candle', 'cookie'] },
  { pattern: 's_____', canonical: 'school', role: 'standalone', tier: 2, accepted: ['school', 'shadow', 'silver'] },

  // ==========================================
  // --- Tier 3: 7~9 letter words (Level 25+) ---
  // ==========================================
  { pattern: 'h________', canonical: 'hospital', role: 'standalone', tier: 3, accepted: ['hospital', 'handsome', 'homework', 'happiness'] },
  { pattern: 'b________', canonical: 'beautiful', role: 'standalone', tier: 3, accepted: ['beautiful', 'blueberry', 'brilliant'] },
  { pattern: 'k________', canonical: 'knowledge', role: 'standalone', tier: 3, accepted: ['knowledge'] },
  { pattern: 'w________', canonical: 'wonderful', role: 'standalone', tier: 3, accepted: ['wonderful', 'waterfall'] },
  { pattern: 'u________', canonical: 'umbrella', role: 'standalone', tier: 3, accepted: ['umbrella', 'universe'] },
  { pattern: 'c________', canonical: 'chocolate', role: 'standalone', tier: 3, accepted: ['chocolate', 'celebrate'] },
  { pattern: 'a________', canonical: 'adventure', role: 'standalone', tier: 3, accepted: ['adventure', 'astronaut'] },
  { pattern: 'b________', canonical: 'butterfly', role: 'standalone', tier: 3, accepted: ['butterfly', 'breakfast'] },
  { pattern: 'd________', canonical: 'dinosaur', role: 'standalone', tier: 3, accepted: ['dinosaur', 'detective'] },
  { pattern: 'm________', canonical: 'mountain', role: 'standalone', tier: 3, accepted: ['mountain', 'musician'] },
  { pattern: 's________', canonical: 'sandwich', role: 'standalone', tier: 3, accepted: ['sandwich', 'sunflower'] },
  { pattern: 't________', canonical: 'treasure', role: 'standalone', tier: 3, accepted: ['treasure', 'telescope'] },
  { pattern: 'v________', canonical: 'vacation', role: 'standalone', tier: 3, accepted: ['vacation', 'valuable'] },
];

export interface EnglishSentenceTemplate {
  id: string;
  tier: number;
  category: 'daily' | 'compound' | 'novel';
  slots: {
    role: WordRole;
    label: string;
    options: {
      pattern: string;
      canonical: string;
      accepted: string[];
    }[];
  }[];
}

/**
 * Diversified English sentence templates with NO single-letter words!
 * All skeleton patterns strictly match the canonical word length.
 */
export const ENGLISH_SENTENCE_TEMPLATES: EnglishSentenceTemplate[] = [
  // Template 1: Nature ("Birds sing songs")
  {
    id: 'en_birds_sing',
    tier: 5,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'Subject',
        options: [
          { pattern: 'B____', canonical: 'Birds', accepted: ['birds'] },
          { pattern: 'F____', canonical: 'Frogs', accepted: ['frogs'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Action',
        options: [
          { pattern: 's___', canonical: 'sing', accepted: ['sing'] },
          { pattern: 'p___', canonical: 'play', accepted: ['play'] }
        ]
      },
      {
        role: 'object',
        label: 'Object',
        options: [
          { pattern: 's____', canonical: 'songs', accepted: ['songs', 'sweet'] }
        ]
      }
    ]
  },

  // Template 2: Wind ("The wind blows softly")
  {
    id: 'en_wind_blows',
    tier: 5,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'Subject',
        options: [
          { pattern: 'W___', canonical: 'Wind', accepted: ['wind'] },
          { pattern: 'R___', canonical: 'Rain', accepted: ['rain'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Verb',
        options: [
          { pattern: 'f____', canonical: 'falls', accepted: ['falls', 'flows'] },
          { pattern: 'b____', canonical: 'blows', accepted: ['blows'] }
        ]
      },
      {
        role: 'adverb',
        label: 'Manner',
        options: [
          { pattern: 's_____', canonical: 'softly', accepted: ['softly', 'slowly'] }
        ]
      }
    ]
  },

  // Template 3: Group activity ("We walk to beach")
  {
    id: 'en_we_walk',
    tier: 6,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'Subject',
        options: [
          { pattern: 'W_', canonical: 'We', accepted: ['we'] },
          { pattern: 'T___', canonical: 'They', accepted: ['they'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Action',
        options: [
          { pattern: 'w___', canonical: 'walk', accepted: ['walk'] },
          { pattern: 'r__', canonical: 'run', accepted: ['run'] }
        ]
      },
      {
        role: 'adverb',
        label: 'Direction',
        options: [
          { pattern: 't_', canonical: 'to', accepted: ['to'] }
        ]
      },
      {
        role: 'object',
        label: 'Place',
        options: [
          { pattern: 'b____', canonical: 'beach', accepted: ['beach'] },
          { pattern: 'p___', canonical: 'park', accepted: ['park'] }
        ]
      }
    ]
  },

  // Template 4: Summer season ("Summer is warm")
  {
    id: 'en_summer_warm',
    tier: 7,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'Season',
        options: [
          { pattern: 'S_____', canonical: 'Summer', accepted: ['summer'] },
          { pattern: 'S_____', canonical: 'Spring', accepted: ['spring'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Be',
        options: [
          { pattern: 'i_', canonical: 'is', accepted: ['is'] }
        ]
      },
      {
        role: 'object',
        label: 'Quality',
        options: [
          { pattern: 'w___', canonical: 'warm', accepted: ['warm'] },
          { pattern: 'n___', canonical: 'nice', accepted: ['nice'] }
        ]
      }
    ]
  },

  // Template 5: Reading ("Kids read books")
  {
    id: 'en_read_books',
    tier: 8,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'People',
        options: [
          { pattern: 'K___', canonical: 'Kids', accepted: ['kids'] },
          { pattern: 'Y__', canonical: 'You', accepted: ['you'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Action',
        options: [
          { pattern: 'r___', canonical: 'read', accepted: ['read'] },
          { pattern: 'l___', canonical: 'love', accepted: ['love'] }
        ]
      },
      {
        role: 'object',
        label: 'Item',
        options: [
          { pattern: 'b____', canonical: 'books', accepted: ['books'] },
          { pattern: 'm____', canonical: 'music', accepted: ['music'] }
        ]
      }
    ]
  },

  // Template 6: Readiness ("We are ready") - NO single-letter "I"!
  {
    id: 'en_we_ready',
    tier: 10,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: 'Subject',
        options: [
          { pattern: 'W_', canonical: 'We', accepted: ['we'] },
          { pattern: 'T___', canonical: 'They', accepted: ['they'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Be',
        options: [
          { pattern: 'a__', canonical: 'are', accepted: ['are'] }
        ]
      },
      {
        role: 'object',
        label: 'Feeling',
        options: [
          { pattern: 'r____', canonical: 'ready', accepted: ['ready'] },
          { pattern: 'h____', canonical: 'happy', accepted: ['happy'] }
        ]
      }
    ]
  },

  // Template 7: Compound past/future
  {
    id: 'en_years',
    tier: 15,
    category: 'compound',
    slots: [
      {
        role: 'time',
        label: 'Past Time',
        options: [
          { pattern: 'L___', canonical: 'Last', accepted: ['last'] }
        ]
      },
      {
        role: 'time',
        label: 'Unit',
        options: [
          { pattern: 'y___', canonical: 'year', accepted: ['year'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Was',
        options: [
          { pattern: 'w__', canonical: 'was', accepted: ['was'] }
        ]
      },
      {
        role: 'standalone',
        label: 'Past Year',
        options: [
          { pattern: '####', canonical: '2025', accepted: ['2024', '2025'] }
        ]
      },
      {
        role: 'time',
        label: 'Future Time',
        options: [
          { pattern: 'n___', canonical: 'next', accepted: ['next'] }
        ]
      },
      {
        role: 'standalone',
        label: 'Future Year',
        options: [
          { pattern: '####', canonical: '2027', accepted: ['2026', '2027'] }
        ]
      }
    ]
  },

  // Template 8: Novel
  {
    id: 'en_novel_stars',
    tier: 35,
    category: 'novel',
    slots: [
      {
        role: 'subject',
        label: 'Subject',
        options: [
          { pattern: 'B_____', canonical: 'Bright', accepted: ['bright'] }
        ]
      },
      {
        role: 'subject',
        label: 'Noun',
        options: [
          { pattern: 's____', canonical: 'stars', accepted: ['stars'] }
        ]
      },
      {
        role: 'predicate',
        label: 'Verb',
        options: [
          { pattern: 's____', canonical: 'shine', accepted: ['shine'] }
        ]
      },
      {
        role: 'adverb',
        label: 'Manner',
        options: [
          { pattern: 's_____', canonical: 'softly', accepted: ['softly'] }
        ]
      },
      {
        role: 'adverb',
        label: 'Preposition',
        options: [
          { pattern: 'o___', canonical: 'over', accepted: ['over'] }
        ]
      },
      {
        role: 'object',
        label: 'Place',
        options: [
          { pattern: 'q____', canonical: 'quiet', accepted: ['quiet'] }
        ]
      },
      {
        role: 'object',
        label: 'Water',
        options: [
          { pattern: 'l____', canonical: 'lakes', accepted: ['lakes'] }
        ]
      }
    ]
  }
];
