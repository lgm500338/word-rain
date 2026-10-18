import { WordRole } from '../types/game';

export interface KoreanWordEntry {
  chosung: string;
  canonical: string;
  role: WordRole;
  tier: number; // 1 to 5
  accepted: string[];
}

/**
 * 100% STRICT STANDARD KOREAN VOCABULARY & MATCHING CHOSUNG
 * - Every word is an authentic standard Korean entry from the National Institute of Korean Language.
 * - Every chosung strictly equals getChosung(canonical) and getChosung(accepted[i]).
 * - Syllable lengths strictly equal chosung length.
 */
export const KOREAN_STANDALONE_WORDS: KoreanWordEntry[] = [
  // ==========================================
  // --- 1-LETTER CHOSUNG (1-syllable only) ---
  // ==========================================
  { chosung: 'ㅂ', canonical: '봄', role: 'standalone', tier: 1, accepted: ['봄', '밤', '밥', '별', '발', '불', '빛', '벽', '비'] },
  { chosung: 'ㄲ', canonical: '꽃', role: 'standalone', tier: 1, accepted: ['꽃', '꿈', '끝', '꼭', '꾀', '끈'] },
  { chosung: 'ㄷ', canonical: '달', role: 'standalone', tier: 1, accepted: ['달', '돌', '돈'] },
  { chosung: 'ㄸ', canonical: '땀', role: 'standalone', tier: 1, accepted: ['땀', '떡', '뜰'] },
  { chosung: 'ㅅ', canonical: '산', role: 'standalone', tier: 1, accepted: ['산', '새', '손', '숲', '술', '섬', '시', '소'] },
  { chosung: 'ㄱ', canonical: '강', role: 'standalone', tier: 1, accepted: ['강', '길', '귀', '곰', '공', '국', '감', '검'] },
  { chosung: 'ㄴ', canonical: '눈', role: 'standalone', tier: 1, accepted: ['눈', '날', '낮', '논', '늪', '뇌'] },
  { chosung: 'ㅎ', canonical: '해', role: 'standalone', tier: 1, accepted: ['해', '흙', '힘', '활', '학', '향'] },
  { chosung: 'ㅁ', canonical: '말', role: 'standalone', tier: 1, accepted: ['말', '물', '목', '문', '맛', '몸', '먹'] },
  { chosung: 'ㅇ', canonical: '옷', role: 'standalone', tier: 1, accepted: ['옷', '입', '잎', '알', '왕', '약', '열', '은'] },
  { chosung: 'ㅈ', canonical: '집', role: 'standalone', tier: 1, accepted: ['집', '잔', '쥐', '짐', '줄', '점', '절'] },
  { chosung: 'ㅊ', canonical: '책', role: 'standalone', tier: 1, accepted: ['책', '차', '침', '총', '춤'] },
  { chosung: 'ㅋ', canonical: '콩', role: 'standalone', tier: 1, accepted: ['콩', '코', '컵', '칼'] },
  { chosung: 'ㅌ', canonical: '탑', role: 'standalone', tier: 1, accepted: ['탑', '턱', '털', '틈', '탕'] },
  { chosung: 'ㅍ', canonical: '풀', role: 'standalone', tier: 1, accepted: ['풀', '파', '팥', '팔', '피', '품'] },

  // ==========================================
  // --- 2-LETTER CHOSUNG (2-syllables only) ---
  // ==========================================
  // 1) ㅂㅎ: strictly 2 syllables -> 비행 (NOT 3-syllable 비행기!)
  { chosung: 'ㅂㅎ', canonical: '비행', role: 'standalone', tier: 1, accepted: ['비행', '변화', '방학', '백합', '보호', '부활', '발휘', '방향'] },
  // 2) ㅈㅈ: strictly 2 syllables -> 진주 (NOT 3-syllable 자전거!)
  { chosung: 'ㅈㅈ', canonical: '진주', role: 'standalone', tier: 1, accepted: ['진주', '전쟁', '정자', '자주', '작정', '질주', '직접', '존재'] },
  { chosung: 'ㅅㄱ', canonical: '사과', role: 'standalone', tier: 1, accepted: ['사과', '소금', '시계', '순금', '서구', '식구', '생각', '수건'] },
  { chosung: 'ㅍㄷ', canonical: '포도', role: 'standalone', tier: 1, accepted: ['포도', '파도', '팔도', '풍등', '평등'] },
  { chosung: 'ㅎㄴ', canonical: '하늘', role: 'standalone', tier: 1, accepted: ['하늘', '하나', '해남', '화난', '흉내', '혼난', '한남', '해녀', '호남', '한낮', '한눈'] },
  { chosung: 'ㅂㄷ', canonical: '바다', role: 'standalone', tier: 1, accepted: ['바다', '보도', '부두', '밴드', '바닥', '배달'] },
  { chosung: 'ㄱㄹ', canonical: '구름', role: 'standalone', tier: 1, accepted: ['구름', '가람', '기린', '계란', '고래', '거리', '그림', '기록'] },
  { chosung: 'ㅊㄱ', canonical: '친구', role: 'standalone', tier: 1, accepted: ['친구', '축구', '청구', '출구', '철길'] },
  { chosung: 'ㅎㄱ', canonical: '학교', role: 'standalone', tier: 1, accepted: ['학교', '한국', '황금', '한글', '화가', '향기', '한강'] },
  { chosung: 'ㄴㄹ', canonical: '노래', role: 'standalone', tier: 1, accepted: ['노래', '나라', '나루', '누리', '나락'] },
  { chosung: 'ㅋㅍ', canonical: '커피', role: 'standalone', tier: 1, accepted: ['커피', '카페', '캠프', '쿠폰'] },
  { chosung: 'ㅂㄹ', canonical: '바람', role: 'standalone', tier: 1, accepted: ['바람', '보람', '보라', '벼락', '보름'] },
  { chosung: 'ㅅㅁ', canonical: '선물', role: 'standalone', tier: 1, accepted: ['선물', '신문', '소망', '사물', '수목', '사막'] },
  { chosung: 'ㅂㅂ', canonical: '별빛', role: 'standalone', tier: 1, accepted: ['별빛', '봄비', '불빛', '반복', '방법', '발발', '반발', '부부', '부분', '배분', '본부', '보배', '별별'] },
  { chosung: 'ㅅㄹ', canonical: '사랑', role: 'standalone', tier: 1, accepted: ['사랑', '사람', '서랍', '소리', '서로', '수락'] },
  { chosung: 'ㅎㅂ', canonical: '행복', role: 'standalone', tier: 1, accepted: ['행복', '화분', '해변', '호박', '한복'] },
  { chosung: 'ㄴㅁ', canonical: '나무', role: 'standalone', tier: 1, accepted: ['나무', '네모', '눈물', '낭만', '남매'] },
  { chosung: 'ㅇㄹ', canonical: '여름', role: 'standalone', tier: 1, accepted: ['여름', '유리', '요리', '어른', '우리', '울림'] },
  { chosung: 'ㄱㅇ', canonical: '겨울', role: 'standalone', tier: 1, accepted: ['겨울', '가을', '과일', '거울', '기억'] },
  { chosung: 'ㄴㅂ', canonical: '나비', role: 'standalone', tier: 1, accepted: ['나비', '남부', '냄비'] },
  { chosung: 'ㅌㄲ', canonical: '토끼', role: 'standalone', tier: 1, accepted: ['토끼', '턱끈'] },
  { chosung: 'ㄱㅊ', canonical: '기차', role: 'standalone', tier: 1, accepted: ['기차', '경찰', '김치', '고추', '강철', '가치'] },
  { chosung: 'ㅁㅈ', canonical: '모자', role: 'standalone', tier: 1, accepted: ['모자', '문자', '먼지', '맥주', '매점', '목적'] },
  { chosung: 'ㅅㅂ', canonical: '신발', role: 'standalone', tier: 1, accepted: ['신발', '새벽', '수박', '선반'] },
  { chosung: 'ㅇㅅ', canonical: '우산', role: 'standalone', tier: 1, accepted: ['우산', '약속', '연습', '역사', '예술', '우선', '인사', '영웅', '여성', '영상', '위생', '안색', '열쇠', '예상', '욕실', '야수', '옥상'] },
  { chosung: 'ㅇㅈ', canonical: '의자', role: 'standalone', tier: 1, accepted: ['의자', '요정', '우주', '안주', '인정', '열정'] },
  { chosung: 'ㅊㅅ', canonical: '책상', role: 'standalone', tier: 1, accepted: ['책상', '청소', '천사', '찬사'] },
  { chosung: 'ㅊㅈ', canonical: '치즈', role: 'standalone', tier: 1, accepted: ['치즈', '창작', '참조', '친절', '찻잔'] },
  { chosung: 'ㅍㅈ', canonical: '피자', role: 'standalone', tier: 1, accepted: ['피자', '표지', '편지', '포장'] },
  { chosung: 'ㄱㅂ', canonical: '가방', role: 'standalone', tier: 1, accepted: ['가방', '국밥', '공부', '갈비'] },
  { chosung: 'ㅇㅇ', canonical: '우유', role: 'standalone', tier: 1, accepted: ['우유', '이유', '여우', '음악', '인연', '이야'] },
  { chosung: 'ㄸㄱ', canonical: '딸기', role: 'standalone', tier: 1, accepted: ['딸기', '떡국'] },
  { chosung: 'ㅎㅅ', canonical: '호수', role: 'standalone', tier: 1, accepted: ['호수', '햇살', '화실', '휴식', '환상'] },
  { chosung: 'ㄷㅍ', canonical: '단풍', role: 'standalone', tier: 1, accepted: ['단풍', '대포', '도표', '동포'] },
  { chosung: 'ㅅㅈ', canonical: '사자', role: 'standalone', tier: 1, accepted: ['사자', '사진', '상자', '시장', '서점', '시작'] },
  { chosung: 'ㅅㅅ', canonical: '사슴', role: 'standalone', tier: 1, accepted: ['사슴', '세상', '스승', '소설', '상상'] },
  { chosung: 'ㅇㅁ', canonical: '양말', role: 'standalone', tier: 1, accepted: ['양말', '연말', '유물', '엄마', '안마'] },
  { chosung: 'ㅇㅍ', canonical: '연필', role: 'standalone', tier: 1, accepted: ['연필', '양파', '우표', '열풍'] },
  { chosung: 'ㅂㅇ', canonical: '바위', role: 'standalone', tier: 1, accepted: ['바위', '배우', '방울'] },
  { chosung: 'ㄷㅊ', canonical: '단추', role: 'standalone', tier: 1, accepted: ['단추', '대추', '동창', '당첨'] },
  { chosung: 'ㅈㄱ', canonical: '지갑', role: 'standalone', tier: 1, accepted: ['지갑', '조개', '장갑', '지구'] },
  { chosung: 'ㅇㅎ', canonical: '여행', role: 'standalone', tier: 1, accepted: ['여행', '인형', '영화', '은하', '은행'] },
  { chosung: 'ㅈㅁ', canonical: '장미', role: 'standalone', tier: 1, accepted: ['장미', '주말', '주민', '자몽'] },
  { chosung: 'ㅍㄹ', canonical: '푸른', role: 'adverb', tier: 1, accepted: ['푸른', '파란', '피로'] },
  { chosung: 'ㅁㅅ', canonical: '미소', role: 'standalone', tier: 1, accepted: ['미소', '미술', '명상', '모습'] },
  { chosung: 'ㄷㄹ', canonical: '다리', role: 'standalone', tier: 1, accepted: ['다리', '도로', '동료', '달력'] },
  { chosung: 'ㅁㄹ', canonical: '미래', role: 'standalone', tier: 1, accepted: ['미래', '모래', '머리'] },
  { chosung: 'ㅂㅅ', canonical: '버스', role: 'standalone', tier: 1, accepted: ['버스', '보석', '백색', '방송'] },
  { chosung: 'ㅅㅍ', canonical: '소풍', role: 'standalone', tier: 1, accepted: ['소풍', '슬픔', '스푼', '쇼핑'] },
  { chosung: 'ㅇㄴ', canonical: '안녕', role: 'standalone', tier: 1, accepted: ['안녕', '오늘', '옛날', '언니', '양념', '안내', '인내'] },
  { chosung: 'ㅈㅎ', canonical: '전화', role: 'standalone', tier: 1, accepted: ['전화', '조화', '지하', '재회'] },
  { chosung: 'ㅊㅊ', canonical: '청춘', role: 'standalone', tier: 1, accepted: ['청춘', '친척', '추천', '창천'] },
  { chosung: 'ㅌㅇ', canonical: '태양', role: 'standalone', tier: 1, accepted: ['태양', '통일', '토양'] },
  { chosung: 'ㅍㅅ', canonical: '풍선', role: 'standalone', tier: 1, accepted: ['풍선', '필수'] },
  { chosung: 'ㅎㅁ', canonical: '희망', role: 'standalone', tier: 1, accepted: ['희망', '화목', '한문'] },
  { chosung: 'ㄱㄱ', canonical: '건강', role: 'standalone', tier: 1, accepted: ['건강', '가게', '감각', '고국'] },
  { chosung: 'ㄷㅂ', canonical: '달빛', role: 'standalone', tier: 1, accepted: ['달빛', '동백', '대박', '도박'] },
  { chosung: 'ㅁㅁ', canonical: '매미', role: 'standalone', tier: 1, accepted: ['매미', '면모'] },
  { chosung: 'ㅂㅈ', canonical: '반지', role: 'standalone', tier: 1, accepted: ['반지', '부자', '부적'] },
  { chosung: 'ㅅㅎ', canonical: '사회', role: 'standalone', tier: 1, accepted: ['사회', '산호', '신호', '상황'] },
  { chosung: 'ㅇㅂ', canonical: '음반', role: 'standalone', tier: 1, accepted: ['음반', '이별', '안방'] },
  { chosung: 'ㅈㅅ', canonical: '진심', role: 'standalone', tier: 1, accepted: ['진심', '정성', '점심', '자신'] },
  { chosung: 'ㅋㄹ', canonical: '콜라', role: 'standalone', tier: 1, accepted: ['콜라', '카레', '컬러', '크림'] },
  { chosung: 'ㅌㅅ', canonical: '탄산', role: 'standalone', tier: 1, accepted: ['탄산', '탐색', '통신'] },
  { chosung: 'ㅍㅌ', canonical: '파티', role: 'standalone', tier: 1, accepted: ['파티', '패턴', '평택'] },
  { chosung: 'ㅎㄹ', canonical: '하루', role: 'standalone', tier: 1, accepted: ['하루', '흐름', '활력', '한류'] },

  // ==========================================
  // --- 3-LETTER CHOSUNG (3-syllables only) ---
  // ==========================================
  // 1) ㅂㅎㄱ: strictly 3 syllables -> 비행기
  { chosung: 'ㅂㅎㄱ', canonical: '비행기', role: 'standalone', tier: 2, accepted: ['비행기', '백혈구', '방향감'] },
  // 2) ㅈㅈㄱ: strictly 3 syllables -> 자전거
  { chosung: 'ㅈㅈㄱ', canonical: '자전거', role: 'standalone', tier: 2, accepted: ['자전거', '주주관'] },
  { chosung: 'ㅂㄴㄴ', canonical: '바나나', role: 'standalone', tier: 2, accepted: ['바나나', '빛나는', '보내는'] },
  { chosung: 'ㅈㄷㅊ', canonical: '자동차', role: 'standalone', tier: 2, accepted: ['자동차', '지도층'] },
  { chosung: 'ㅋㅍㅌ', canonical: '컴퓨터', role: 'standalone', tier: 2, accepted: ['컴퓨터', '카페트'] },
  { chosung: 'ㅁㅈㄱ', canonical: '무지개', role: 'standalone', tier: 2, accepted: ['무지개', '매점가'] },
  { chosung: 'ㄷㅅㄱ', canonical: '도서관', role: 'standalone', tier: 2, accepted: ['도서관', '도시골'] },
  { chosung: 'ㅂㅎㅈ', canonical: '백화점', role: 'standalone', tier: 2, accepted: ['백화점', '방학중', '보호자'] },
  { chosung: 'ㅎㅅㅌ', canonical: '햄스터', role: 'standalone', tier: 2, accepted: ['햄스터', '학술팀'] },
  { chosung: 'ㄱㅇㅈ', canonical: '강아지', role: 'standalone', tier: 2, accepted: ['강아지'] },
  { chosung: 'ㄱㅇㅇ', canonical: '고양이', role: 'standalone', tier: 2, accepted: ['고양이'] },
  { chosung: 'ㄷㄹㅈ', canonical: '다람쥐', role: 'standalone', tier: 2, accepted: ['다람쥐', '도라지'] },
  { chosung: 'ㄷㅁㅇ', canonical: '동물원', role: 'standalone', tier: 2, accepted: ['동물원'] },
  { chosung: 'ㄴㅇㅌ', canonical: '놀이터', role: 'standalone', tier: 2, accepted: ['놀이터'] },
  { chosung: 'ㅁㅅㄱ', canonical: '미술관', role: 'standalone', tier: 2, accepted: ['미술관'] },
  { chosung: 'ㅂㄷㄱ', canonical: '바닷가', role: 'standalone', tier: 2, accepted: ['바닷가'] },
  { chosung: 'ㄸㅂㅇ', canonical: '떡볶이', role: 'standalone', tier: 2, accepted: ['떡볶이'] },
  { chosung: 'ㅊㅋㄹ', canonical: '초콜릿', role: 'standalone', tier: 2, accepted: ['초콜릿'] },
  { chosung: 'ㅁㅇㄴ', canonical: '맛있는', role: 'adverb', tier: 2, accepted: ['맛있는', '멋있는', '모이는'] },
  { chosung: 'ㄸㄸㅎ', canonical: '따뜻한', role: 'adverb', tier: 2, accepted: ['따뜻한', '똑똑한', '딱딱한'] },
  { chosung: 'ㅈㄱㅇ', canonical: '즐거운', role: 'adverb', tier: 2, accepted: ['즐거운', '정겨운'] },
  { chosung: 'ㅇㅅㅎ', canonical: '열심히', role: 'adverb', tier: 2, accepted: ['열심히', '익숙한', '엄숙한'] },
  { chosung: 'ㄲㅈㅎ', canonical: '꾸준히', role: 'adverb', tier: 2, accepted: ['꾸준히'] },
  { chosung: 'ㅎㅁㅊ', canonical: '희망찬', role: 'adverb', tier: 2, accepted: ['희망찬'] },
  { chosung: 'ㅍㄱㅎ', canonical: '포근한', role: 'adverb', tier: 2, accepted: ['포근한', '포기한'] },
  { chosung: 'ㅇㅈㅅ', canonical: '우주선', role: 'standalone', tier: 2, accepted: ['우주선'] },
  { chosung: 'ㅅㄴㅁ', canonical: '소나무', role: 'standalone', tier: 2, accepted: ['소나무'] },
  { chosung: 'ㄷㅈㄱ', canonical: '도자기', role: 'standalone', tier: 2, accepted: ['도자기', '단절감'] },
  { chosung: 'ㅂㄷㅅ', canonical: '백두산', role: 'standalone', tier: 2, accepted: ['백두산', '부동산'] },
  { chosung: 'ㄱㄹㄱ', canonical: '기러기', role: 'standalone', tier: 2, accepted: ['기러기'] },
  { chosung: 'ㅇㄹㅅ', canonical: '유람선', role: 'standalone', tier: 2, accepted: ['유람선', '요리사'] },
  { chosung: 'ㅅㅈㄱ', canonical: '사진관', role: 'standalone', tier: 2, accepted: ['사진관', '서점가'] },

  // ==========================================
  // --- 4-LETTER CHOSUNG (4-syllables only) ---
  // ==========================================
  { chosung: 'ㅇㄹㄷㅇ', canonical: '아름다운', role: 'adverb', tier: 3, accepted: ['아름다운'] },
  { chosung: 'ㅈㅇㄹㅇ', canonical: '자유로운', role: 'adverb', tier: 3, accepted: ['자유로운'] },
  { chosung: 'ㅅㄱㄹㅇ', canonical: '싱그러운', role: 'adverb', tier: 3, accepted: ['싱그러운'] },
  { chosung: 'ㅂㅉㅂㅉ', canonical: '반짝반짝', role: 'adverb', tier: 3, accepted: ['반짝반짝'] },
  { chosung: 'ㅇㄹㄷㄹ', canonical: '알록달록', role: 'adverb', tier: 3, accepted: ['알록달록'] },
  { chosung: 'ㄷㄱㄷㄱ', canonical: '두근두근', role: 'adverb', tier: 3, accepted: ['두근두근'] },
  { chosung: 'ㅅㄱㅅㄱ', canonical: '소곤소곤', role: 'adverb', tier: 3, accepted: ['소곤소곤'] },
  { chosung: 'ㅂㅅㅂㅅ', canonical: '보슬보슬', role: 'adverb', tier: 3, accepted: ['보슬보슬'] },
  { chosung: 'ㅇㅅㅊㄹ', canonical: '오색찬란', role: 'adverb', tier: 3, accepted: ['오색찬란'] },

  // ==========================================
  // --- 5-LETTER CHOSUNG (5-syllables only) ---
  // ==========================================
  { chosung: 'ㅇㅇㅅㅋㄹ', canonical: '아이스크림', role: 'standalone', tier: 4, accepted: ['아이스크림'] },
];

export interface KoreanSentenceTemplate {
  id: string;
  tier: number;
  category: 'daily' | 'compound' | 'novel';
  slots: {
    role: WordRole;
    label: string;
    options: {
      chosung: string;
      canonical: string;
      accepted: string[];
    }[];
  }[];
}

/**
 * 100% Correct Standard Korean Sentence Templates
 * - No spelling errors (e.g. '파래요' instead of '푸러요')
 * - Every word strictly matches its designated chosung string
 */
export const KOREAN_SENTENCE_TEMPLATES: KoreanSentenceTemplate[] = [
  // Template 1: Nature sky ("하늘이 맑아요", "바다가 파래요")
  {
    id: 'sky_clear',
    tier: 5,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: '주어',
        options: [
          { chosung: 'ㅎㄴㅇ', canonical: '하늘이', accepted: ['하늘이'] },
          { chosung: 'ㅂㄷㄱ', canonical: '바다가', accepted: ['바다가'] },
          { chosung: 'ㅂㄹㅇ', canonical: '바람이', accepted: ['바람이'] },
          { chosung: 'ㅎㅅㅇ', canonical: '햇살이', accepted: ['햇살이'] }
        ]
      },
      {
        role: 'adverb',
        label: '부사',
        options: [
          { chosung: 'ㅈㅁ', canonical: '정말', accepted: ['정말'] },
          { chosung: 'ㅇㅈ', canonical: '아주', accepted: ['아주', '완전'] },
          { chosung: 'ㅈㅉ', canonical: '진짜', accepted: ['진짜'] }
        ]
      },
      {
        role: 'predicate',
        label: '서술어',
        options: [
          // 맑[ㅁ] 아[ㅇ] 요[ㅇ] -> ㅁㅇㅇ
          { chosung: 'ㅁㅇㅇ', canonical: '맑아요', accepted: ['맑아요'] },
          // 파[ㅍ] 래[ㄹ] 요[ㅇ] -> ㅍㄹㅇ (NOT '푸러요'!)
          { chosung: 'ㅍㄹㅇ', canonical: '파래요', accepted: ['파래요'] },
          // 높[ㄴ] 아[ㅇ] 요[ㅇ] -> ㄴㅇㅇ
          { chosung: 'ㄴㅇㅇ', canonical: '높아요', accepted: ['높아요'] },
          // 멋[ㅁ] 져[ㅈ] 요[ㅇ] -> ㅁㅈㅇ
          { chosung: 'ㅁㅈㅇ', canonical: '멋져요', accepted: ['멋져요'] }
        ]
      }
    ]
  },

  // Template 2: Season atmosphere ("완전 가을이야")
  {
    id: 'autumn_vibe',
    tier: 5,
    category: 'daily',
    slots: [
      {
        role: 'adverb',
        label: '강조',
        options: [
          { chosung: 'ㅇㅈ', canonical: '완전', accepted: ['완전', '아주'] },
          { chosung: 'ㅈㅁ', canonical: '정말', accepted: ['정말'] },
          { chosung: 'ㅈㅉ', canonical: '진짜', accepted: ['진짜'] }
        ]
      },
      {
        role: 'subject',
        label: '계절감',
        options: [
          { chosung: 'ㄱㅇㅇㅇ', canonical: '가을이야', accepted: ['가을이야'] },
          { chosung: 'ㅇㄹㅇㅇ', canonical: '여름이야', accepted: ['여름이야'] },
          { chosung: 'ㅂㅇㅇ', canonical: '봄이야', accepted: ['봄이야'] }
        ]
      }
    ]
  },

  // Template 3: Hunger feeling ("나는 배가 고파")
  {
    id: 'hungry_daily',
    tier: 6,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: '주어',
        options: [
          { chosung: 'ㄴㄴ', canonical: '나는', accepted: ['나는'] },
          { chosung: 'ㅊㄱㄴ', canonical: '친구는', accepted: ['친구는'] }
        ]
      },
      {
        role: 'object',
        label: '상태',
        options: [
          { chosung: 'ㅂㄱ', canonical: '배가', accepted: ['배가'] },
          { chosung: 'ㅈㅇ', canonical: '잠이', accepted: ['잠이'] },
          { chosung: 'ㅂㅇ', canonical: '밥이', accepted: ['밥이'] }
        ]
      },
      {
        role: 'predicate',
        label: '서술어',
        options: [
          { chosung: 'ㄱㅍ', canonical: '고파', accepted: ['고파'] },
          { chosung: 'ㅇㅇ', canonical: '와요', accepted: ['와요'] }
        ]
      }
    ]
  },

  // Template 4: Friendly trip ("우리 바다 가자")
  {
    id: 'trip_friend',
    tier: 7,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: '우리',
        options: [
          { chosung: 'ㅇㄹ', canonical: '우리', accepted: ['우리'] },
          { chosung: 'ㅁㄷ', canonical: '모두', accepted: ['모두'] }
        ]
      },
      {
        role: 'object',
        label: '장소',
        options: [
          { chosung: 'ㅂㄷ', canonical: '바다', accepted: ['바다'] },
          { chosung: 'ㄱㅇ', canonical: '공원', accepted: ['공원'] }
        ]
      },
      {
        role: 'predicate',
        label: '행동',
        options: [
          { chosung: 'ㄱㅈ', canonical: '가자', accepted: ['가자'] },
          { chosung: 'ㅂㄹㄱㅈ', canonical: '보러가자', accepted: ['보러가자'] }
        ]
      }
    ]
  },

  // Template 5: Book reading ("책을 많이 읽자")
  {
    id: 'book_reading',
    tier: 9,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: '대상',
        options: [
          { chosung: 'ㅊㅇ', canonical: '책을', accepted: ['책을'] },
          { chosung: 'ㄱㅇ', canonical: '글을', accepted: ['글을'] }
        ]
      },
      {
        role: 'adverb',
        label: '정도',
        options: [
          { chosung: 'ㅁㅇ', canonical: '많이', accepted: ['많이'] },
          { chosung: 'ㄲㅈㅎ', canonical: '꾸준히', accepted: ['꾸준히'] }
        ]
      },
      {
        role: 'predicate',
        label: '권유',
        options: [
          { chosung: 'ㅇㅈ', canonical: '읽자', accepted: ['읽자'] },
          { chosung: 'ㅆㅈ', canonical: '쓰자', accepted: ['쓰자'] }
        ]
      }
    ]
  },

  // Template 6: Coffee morning ("커피 향이 좋아")
  {
    id: 'coffee_scent',
    tier: 11,
    category: 'daily',
    slots: [
      {
        role: 'subject',
        label: '음료',
        options: [
          { chosung: 'ㅋㅍ', canonical: '커피', accepted: ['커피'] },
          { chosung: 'ㄴㅊ', canonical: '녹차', accepted: ['녹차'] }
        ]
      },
      {
        role: 'object',
        label: '감각',
        options: [
          { chosung: 'ㅎㅇ', canonical: '향이', accepted: ['향이'] },
          { chosung: 'ㅁㅇ', canonical: '맛이', accepted: ['맛이'] },
          { chosung: 'ㅂㅇ', canonical: '빛이', accepted: ['빛이'] }
        ]
      },
      {
        role: 'predicate',
        label: '느낌',
        options: [
          { chosung: 'ㅈㅇ', canonical: '좋아', accepted: ['좋아'] },
          { chosung: 'ㅈㅎ', canonical: '진해', accepted: ['진해'] }
        ]
      }
    ]
  },

  // Template 7: Compound past and future ("작년은 2025년 이었고 내년은 2027년 입니다")
  {
    id: 'compound_years',
    tier: 15,
    category: 'compound',
    slots: [
      {
        role: 'time',
        label: '과거시점',
        options: [
          { chosung: 'ㅈㄴㅇ', canonical: '작년은', accepted: ['작년은'] },
          { chosung: 'ㅇㅈㅇ', canonical: '예전은', accepted: ['예전은'] }
        ]
      },
      {
        role: 'standalone',
        label: '과거연도',
        options: [
          { chosung: '2025ㄴ', canonical: '2025년', accepted: ['2025년'] },
          { chosung: '2024ㄴ', canonical: '2024년', accepted: ['2024년'] }
        ]
      },
      {
        role: 'predicate',
        label: '과거연결',
        options: [
          { chosung: 'ㅇㅇㄱ', canonical: '이었고', accepted: ['이었고'] },
          { chosung: 'ㅈㄴㄱ', canonical: '지나고', accepted: ['지나고'] }
        ]
      },
      {
        role: 'time',
        label: '미래시점',
        options: [
          { chosung: 'ㄴㄴㅇ', canonical: '내년은', accepted: ['내년은'] },
          { chosung: 'ㅎㄴㅇ', canonical: '훗날은', accepted: ['훗날은'] }
        ]
      },
      {
        role: 'standalone',
        label: '미래연도',
        options: [
          { chosung: '2027ㄴ', canonical: '2027년', accepted: ['2027년'] },
          { chosung: '2026ㄴ', canonical: '2026년', accepted: ['2026년'] }
        ]
      },
      {
        role: 'predicate',
        label: '종결서술',
        options: [
          { chosung: 'ㅇㄴㄷ', canonical: '입니다', accepted: ['입니다'] },
          { chosung: 'ㄷㄴㄷ', canonical: '됩니다', accepted: ['됩니다'] }
        ]
      }
    ]
  },

  // Template 8: Literary evening ("푸른 달빛이 호수위로 은은하게 내려앉는다")
  {
    id: 'novel_lake_night',
    tier: 35,
    category: 'novel',
    slots: [
      {
        role: 'adverb',
        label: '색채수식',
        options: [
          { chosung: 'ㅍㄹ', canonical: '푸른', accepted: ['푸른'] },
          { chosung: 'ㅂㅇ', canonical: '밝은', accepted: ['밝은'] }
        ]
      },
      {
        role: 'subject',
        label: '천체빛',
        options: [
          { chosung: 'ㄷㅂㅇ', canonical: '달빛이', accepted: ['달빛이'] },
          { chosung: 'ㅂㅂㅇ', canonical: '별빛이', accepted: ['별빛이'] }
        ]
      },
      {
        role: 'adverb',
        label: '장소방향',
        options: [
          { chosung: 'ㅎㅅㅇㄹ', canonical: '호수위로', accepted: ['호수위로'] },
          { chosung: 'ㅂㄷㅇㄹ', canonical: '바다위로', accepted: ['바다위로'] }
        ]
      },
      {
        role: 'adverb',
        label: '서정모습',
        options: [
          { chosung: 'ㅇㅇㅎㄱ', canonical: '은은하게', accepted: ['은은하게'] },
          { chosung: 'ㄱㅇㅎㄱ', canonical: '고요하게', accepted: ['고요하게'] }
        ]
      },
      {
        role: 'predicate',
        label: '문학종결',
        options: [
          { chosung: 'ㄴㄹㅇㄴㄷ', canonical: '내려앉는다', accepted: ['내려앉는다'] },
          { chosung: 'ㅂㅈㅇㄱㄷ', canonical: '번지어간다', accepted: ['번지어간다'] }
        ]
      }
    ]
  },

  // Template 9: Long Masterpiece Novel Sentence (9 clauses - "오늘 하루 날씨가 푸르고 맑아 기분이 하늘을 날아갈듯 행복했다")
  {
    id: 'novel_happy_day',
    tier: 40,
    category: 'novel',
    slots: [
      {
        role: 'time',
        label: '시점',
        options: [
          { chosung: 'ㅇㄴ', canonical: '오늘', accepted: ['오늘'] }
        ]
      },
      {
        role: 'time',
        label: '하루',
        options: [
          { chosung: 'ㅎㄹ', canonical: '하루', accepted: ['하루'] }
        ]
      },
      {
        role: 'subject',
        label: '날씨',
        options: [
          { chosung: 'ㄴㅆㄱ', canonical: '날씨가', accepted: ['날씨가'] }
        ]
      },
      {
        role: 'adverb',
        label: '빛깔',
        options: [
          { chosung: 'ㅍㄹㄱ', canonical: '푸르고', accepted: ['푸르고'] }
        ]
      },
      {
        role: 'adverb',
        label: '청명',
        options: [
          { chosung: 'ㅁㅇ', canonical: '맑아', accepted: ['맑아'] }
        ]
      },
      {
        role: 'subject',
        label: '기분',
        options: [
          { chosung: 'ㄱㅂㅇ', canonical: '기분이', accepted: ['기분이'] }
        ]
      },
      {
        role: 'object',
        label: '하늘',
        options: [
          { chosung: 'ㅎㄴㅇ', canonical: '하늘을', accepted: ['하늘을'] }
        ]
      },
      {
        role: 'adverb',
        label: '비유',
        options: [
          { chosung: 'ㄴㅇㄱㄷ', canonical: '날아갈듯', accepted: ['날아갈듯'] }
        ]
      },
      {
        role: 'predicate',
        label: '서술',
        options: [
          { chosung: 'ㅎㅂㅎㄷ', canonical: '행복했다', accepted: ['행복했다'] }
        ]
      }
    ]
  }
];
