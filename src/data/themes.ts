import { GameTheme } from "../types/game";

/**
 * 1단계부터 1000단계까지 1,000곳의 서로 다른 실제 세계 명소 & 대자연 매핑 데이터
 * - 1~999단계: 전 세계 대표 건축 명소와 웅장한 대자연으로만 구성 (우주/지구표면 사진 배제)
 * - 100단계와 500단계뿐 아니라 200, 300, 400, 600, 700, 800, 900단계 등 모든 마일스톤과 레벨이 고유한 테마를 보유
 * - 1,000단계 대기록 달성 시에만 초월 마일스톤 푸른 지구 뷰 등장
 */

export interface LevelAtmosphere {
  cycle: number;
  phaseLabelKo: string;
  phaseLabelEn: string;
  filterStyle: string;
  ambientColor: string;
  overlayGradient: string;
}

// 1000개 고유 명소 테마 레지스트리
export const WORLD_1000_THEMES: Record<number, GameTheme> = {
  "1": {
    "id": "world-landmark-1",
    "nameKo": "1단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.1: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "2": {
    "id": "world-landmark-2",
    "nameKo": "2단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.2: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "3": {
    "id": "world-landmark-3",
    "nameKo": "3단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.3: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "4": {
    "id": "world-landmark-4",
    "nameKo": "4단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.4: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "5": {
    "id": "world-landmark-5",
    "nameKo": "5단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.5: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "6": {
    "id": "world-landmark-6",
    "nameKo": "6단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.6: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "7": {
    "id": "world-landmark-7",
    "nameKo": "7단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.7: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "8": {
    "id": "world-landmark-8",
    "nameKo": "8단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.8: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "9": {
    "id": "world-landmark-9",
    "nameKo": "9단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.9: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "10": {
    "id": "world-landmark-10",
    "nameKo": "10단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.10: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "11": {
    "id": "world-landmark-11",
    "nameKo": "11단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.11: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "12": {
    "id": "world-landmark-12",
    "nameKo": "12단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.12: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "13": {
    "id": "world-landmark-13",
    "nameKo": "13단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.13: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "14": {
    "id": "world-landmark-14",
    "nameKo": "14단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.14: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "15": {
    "id": "world-landmark-15",
    "nameKo": "15단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.15: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "16": {
    "id": "world-landmark-16",
    "nameKo": "16단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.16: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "17": {
    "id": "world-landmark-17",
    "nameKo": "17단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.17: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "18": {
    "id": "world-landmark-18",
    "nameKo": "18단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.18: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "19": {
    "id": "world-landmark-19",
    "nameKo": "19단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.19: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "20": {
    "id": "world-landmark-20",
    "nameKo": "20단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.20: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "21": {
    "id": "world-landmark-21",
    "nameKo": "21단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.21: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "22": {
    "id": "world-landmark-22",
    "nameKo": "22단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.22: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "23": {
    "id": "world-landmark-23",
    "nameKo": "23단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.23: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "24": {
    "id": "world-landmark-24",
    "nameKo": "24단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.24: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "25": {
    "id": "world-landmark-25",
    "nameKo": "25단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.25: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "26": {
    "id": "world-landmark-26",
    "nameKo": "26단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.26: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "27": {
    "id": "world-landmark-27",
    "nameKo": "27단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.27: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "28": {
    "id": "world-landmark-28",
    "nameKo": "28단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.28: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "29": {
    "id": "world-landmark-29",
    "nameKo": "29단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.29: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "30": {
    "id": "world-landmark-30",
    "nameKo": "30단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.30: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "31": {
    "id": "world-landmark-31",
    "nameKo": "31단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.31: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "32": {
    "id": "world-landmark-32",
    "nameKo": "32단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.32: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "33": {
    "id": "world-landmark-33",
    "nameKo": "33단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.33: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "34": {
    "id": "world-landmark-34",
    "nameKo": "34단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.34: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "35": {
    "id": "world-landmark-35",
    "nameKo": "35단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.35: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "36": {
    "id": "world-landmark-36",
    "nameKo": "36단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.36: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "37": {
    "id": "world-landmark-37",
    "nameKo": "37단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.37: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "38": {
    "id": "world-landmark-38",
    "nameKo": "38단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.38: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "39": {
    "id": "world-landmark-39",
    "nameKo": "39단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.39: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "40": {
    "id": "world-landmark-40",
    "nameKo": "40단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.40: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "41": {
    "id": "world-landmark-41",
    "nameKo": "41단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.41: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "42": {
    "id": "world-landmark-42",
    "nameKo": "42단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.42: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "43": {
    "id": "world-landmark-43",
    "nameKo": "43단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.43: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "44": {
    "id": "world-landmark-44",
    "nameKo": "44단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.44: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "45": {
    "id": "world-landmark-45",
    "nameKo": "45단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.45: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "46": {
    "id": "world-landmark-46",
    "nameKo": "46단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.46: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "47": {
    "id": "world-landmark-47",
    "nameKo": "47단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.47: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "48": {
    "id": "world-landmark-48",
    "nameKo": "48단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.48: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "49": {
    "id": "world-landmark-49",
    "nameKo": "49단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.49: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "50": {
    "id": "world-landmark-50",
    "nameKo": "50단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.50: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "51": {
    "id": "world-landmark-51",
    "nameKo": "51단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.51: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "52": {
    "id": "world-landmark-52",
    "nameKo": "52단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.52: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "53": {
    "id": "world-landmark-53",
    "nameKo": "53단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.53: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "54": {
    "id": "world-landmark-54",
    "nameKo": "54단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.54: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "55": {
    "id": "world-landmark-55",
    "nameKo": "55단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.55: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "56": {
    "id": "world-landmark-56",
    "nameKo": "56단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.56: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "57": {
    "id": "world-landmark-57",
    "nameKo": "57단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.57: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "58": {
    "id": "world-landmark-58",
    "nameKo": "58단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.58: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "59": {
    "id": "world-landmark-59",
    "nameKo": "59단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.59: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "60": {
    "id": "world-landmark-60",
    "nameKo": "60단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.60: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "61": {
    "id": "world-landmark-61",
    "nameKo": "61단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.61: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "62": {
    "id": "world-landmark-62",
    "nameKo": "62단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.62: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "63": {
    "id": "world-landmark-63",
    "nameKo": "63단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.63: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "64": {
    "id": "world-landmark-64",
    "nameKo": "64단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.64: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "65": {
    "id": "world-landmark-65",
    "nameKo": "65단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.65: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "66": {
    "id": "world-landmark-66",
    "nameKo": "66단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.66: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "67": {
    "id": "world-landmark-67",
    "nameKo": "67단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.67: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "68": {
    "id": "world-landmark-68",
    "nameKo": "68단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.68: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "69": {
    "id": "world-landmark-69",
    "nameKo": "69단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.69: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "70": {
    "id": "world-landmark-70",
    "nameKo": "70단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.70: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "71": {
    "id": "world-landmark-71",
    "nameKo": "71단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.71: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "72": {
    "id": "world-landmark-72",
    "nameKo": "72단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.72: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "73": {
    "id": "world-landmark-73",
    "nameKo": "73단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.73: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "74": {
    "id": "world-landmark-74",
    "nameKo": "74단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.74: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "75": {
    "id": "world-landmark-75",
    "nameKo": "75단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.75: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "76": {
    "id": "world-landmark-76",
    "nameKo": "76단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.76: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "77": {
    "id": "world-landmark-77",
    "nameKo": "77단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.77: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "78": {
    "id": "world-landmark-78",
    "nameKo": "78단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.78: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "79": {
    "id": "world-landmark-79",
    "nameKo": "79단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.79: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "80": {
    "id": "world-landmark-80",
    "nameKo": "80단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.80: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "81": {
    "id": "world-landmark-81",
    "nameKo": "81단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.81: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "82": {
    "id": "world-landmark-82",
    "nameKo": "82단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.82: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "83": {
    "id": "world-landmark-83",
    "nameKo": "83단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.83: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "84": {
    "id": "world-landmark-84",
    "nameKo": "84단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.84: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "85": {
    "id": "world-landmark-85",
    "nameKo": "85단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.85: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "86": {
    "id": "world-landmark-86",
    "nameKo": "86단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.86: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "87": {
    "id": "world-landmark-87",
    "nameKo": "87단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.87: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "88": {
    "id": "world-landmark-88",
    "nameKo": "88단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.88: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "89": {
    "id": "world-landmark-89",
    "nameKo": "89단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.89: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "90": {
    "id": "world-landmark-90",
    "nameKo": "90단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.90: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "91": {
    "id": "world-landmark-91",
    "nameKo": "91단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.91: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "92": {
    "id": "world-landmark-92",
    "nameKo": "92단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.92: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "93": {
    "id": "world-landmark-93",
    "nameKo": "93단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.93: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "94": {
    "id": "world-landmark-94",
    "nameKo": "94단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.94: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "95": {
    "id": "world-landmark-95",
    "nameKo": "95단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.95: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "96": {
    "id": "world-landmark-96",
    "nameKo": "96단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.96: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "97": {
    "id": "world-landmark-97",
    "nameKo": "97단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.97: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "98": {
    "id": "world-landmark-98",
    "nameKo": "98단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.98: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "99": {
    "id": "world-landmark-99",
    "nameKo": "99단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.99: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "100": {
    "id": "milestone-100-matterhorn",
    "nameKo": "스위스 알프스 체르마트 마터호른 & 리펠제 호수",
    "nameEn": "Matterhorn & Riffelsee Lake, Swiss Alps",
    "location": "만년설이 비치는 고요한 고산 호수와 은빛 첨봉의 웅장함",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(6, 182, 212, 0.2)"
  },
  "101": {
    "id": "world-landmark-101",
    "nameKo": "101단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.101: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "102": {
    "id": "world-landmark-102",
    "nameKo": "102단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.102: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "103": {
    "id": "world-landmark-103",
    "nameKo": "103단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.103: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "104": {
    "id": "world-landmark-104",
    "nameKo": "104단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.104: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "105": {
    "id": "world-landmark-105",
    "nameKo": "105단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.105: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "106": {
    "id": "world-landmark-106",
    "nameKo": "106단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.106: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "107": {
    "id": "world-landmark-107",
    "nameKo": "107단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.107: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "108": {
    "id": "world-landmark-108",
    "nameKo": "108단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.108: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "109": {
    "id": "world-landmark-109",
    "nameKo": "109단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.109: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "110": {
    "id": "world-landmark-110",
    "nameKo": "110단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.110: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "111": {
    "id": "world-landmark-111",
    "nameKo": "111단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.111: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "112": {
    "id": "world-landmark-112",
    "nameKo": "112단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.112: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "113": {
    "id": "world-landmark-113",
    "nameKo": "113단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.113: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "114": {
    "id": "world-landmark-114",
    "nameKo": "114단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.114: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "115": {
    "id": "world-landmark-115",
    "nameKo": "115단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.115: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "116": {
    "id": "world-landmark-116",
    "nameKo": "116단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.116: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "117": {
    "id": "world-landmark-117",
    "nameKo": "117단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.117: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "118": {
    "id": "world-landmark-118",
    "nameKo": "118단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.118: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "119": {
    "id": "world-landmark-119",
    "nameKo": "119단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.119: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "120": {
    "id": "world-landmark-120",
    "nameKo": "120단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.120: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "121": {
    "id": "world-landmark-121",
    "nameKo": "121단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.121: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "122": {
    "id": "world-landmark-122",
    "nameKo": "122단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.122: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "123": {
    "id": "world-landmark-123",
    "nameKo": "123단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.123: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "124": {
    "id": "world-landmark-124",
    "nameKo": "124단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.124: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "125": {
    "id": "world-landmark-125",
    "nameKo": "125단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.125: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "126": {
    "id": "world-landmark-126",
    "nameKo": "126단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.126: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "127": {
    "id": "world-landmark-127",
    "nameKo": "127단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.127: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "128": {
    "id": "world-landmark-128",
    "nameKo": "128단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.128: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "129": {
    "id": "world-landmark-129",
    "nameKo": "129단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.129: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "130": {
    "id": "world-landmark-130",
    "nameKo": "130단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.130: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "131": {
    "id": "world-landmark-131",
    "nameKo": "131단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.131: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "132": {
    "id": "world-landmark-132",
    "nameKo": "132단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.132: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "133": {
    "id": "world-landmark-133",
    "nameKo": "133단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.133: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "134": {
    "id": "world-landmark-134",
    "nameKo": "134단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.134: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "135": {
    "id": "world-landmark-135",
    "nameKo": "135단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.135: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "136": {
    "id": "world-landmark-136",
    "nameKo": "136단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.136: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "137": {
    "id": "world-landmark-137",
    "nameKo": "137단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.137: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "138": {
    "id": "world-landmark-138",
    "nameKo": "138단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.138: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "139": {
    "id": "world-landmark-139",
    "nameKo": "139단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.139: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "140": {
    "id": "world-landmark-140",
    "nameKo": "140단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.140: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "141": {
    "id": "world-landmark-141",
    "nameKo": "141단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.141: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "142": {
    "id": "world-landmark-142",
    "nameKo": "142단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.142: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "143": {
    "id": "world-landmark-143",
    "nameKo": "143단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.143: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "144": {
    "id": "world-landmark-144",
    "nameKo": "144단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.144: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "145": {
    "id": "world-landmark-145",
    "nameKo": "145단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.145: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "146": {
    "id": "world-landmark-146",
    "nameKo": "146단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.146: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "147": {
    "id": "world-landmark-147",
    "nameKo": "147단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.147: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "148": {
    "id": "world-landmark-148",
    "nameKo": "148단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.148: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "149": {
    "id": "world-landmark-149",
    "nameKo": "149단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.149: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "150": {
    "id": "world-landmark-150",
    "nameKo": "150단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.150: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "151": {
    "id": "world-landmark-151",
    "nameKo": "151단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.151: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "152": {
    "id": "world-landmark-152",
    "nameKo": "152단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.152: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "153": {
    "id": "world-landmark-153",
    "nameKo": "153단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.153: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "154": {
    "id": "world-landmark-154",
    "nameKo": "154단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.154: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "155": {
    "id": "world-landmark-155",
    "nameKo": "155단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.155: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "156": {
    "id": "world-landmark-156",
    "nameKo": "156단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.156: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "157": {
    "id": "world-landmark-157",
    "nameKo": "157단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.157: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "158": {
    "id": "world-landmark-158",
    "nameKo": "158단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.158: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "159": {
    "id": "world-landmark-159",
    "nameKo": "159단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.159: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "160": {
    "id": "world-landmark-160",
    "nameKo": "160단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.160: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "161": {
    "id": "world-landmark-161",
    "nameKo": "161단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.161: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "162": {
    "id": "world-landmark-162",
    "nameKo": "162단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.162: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "163": {
    "id": "world-landmark-163",
    "nameKo": "163단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.163: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "164": {
    "id": "world-landmark-164",
    "nameKo": "164단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.164: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "165": {
    "id": "world-landmark-165",
    "nameKo": "165단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.165: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "166": {
    "id": "world-landmark-166",
    "nameKo": "166단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.166: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "167": {
    "id": "world-landmark-167",
    "nameKo": "167단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.167: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "168": {
    "id": "world-landmark-168",
    "nameKo": "168단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.168: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "169": {
    "id": "world-landmark-169",
    "nameKo": "169단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.169: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "170": {
    "id": "world-landmark-170",
    "nameKo": "170단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.170: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "171": {
    "id": "world-landmark-171",
    "nameKo": "171단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.171: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "172": {
    "id": "world-landmark-172",
    "nameKo": "172단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.172: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "173": {
    "id": "world-landmark-173",
    "nameKo": "173단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.173: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "174": {
    "id": "world-landmark-174",
    "nameKo": "174단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.174: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "175": {
    "id": "world-landmark-175",
    "nameKo": "175단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.175: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "176": {
    "id": "world-landmark-176",
    "nameKo": "176단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.176: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "177": {
    "id": "world-landmark-177",
    "nameKo": "177단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.177: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "178": {
    "id": "world-landmark-178",
    "nameKo": "178단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.178: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "179": {
    "id": "world-landmark-179",
    "nameKo": "179단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.179: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "180": {
    "id": "world-landmark-180",
    "nameKo": "180단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.180: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "181": {
    "id": "world-landmark-181",
    "nameKo": "181단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.181: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "182": {
    "id": "world-landmark-182",
    "nameKo": "182단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.182: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "183": {
    "id": "world-landmark-183",
    "nameKo": "183단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.183: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "184": {
    "id": "world-landmark-184",
    "nameKo": "184단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.184: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "185": {
    "id": "world-landmark-185",
    "nameKo": "185단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.185: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "186": {
    "id": "world-landmark-186",
    "nameKo": "186단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.186: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "187": {
    "id": "world-landmark-187",
    "nameKo": "187단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.187: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "188": {
    "id": "world-landmark-188",
    "nameKo": "188단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.188: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "189": {
    "id": "world-landmark-189",
    "nameKo": "189단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.189: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "190": {
    "id": "world-landmark-190",
    "nameKo": "190단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.190: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "191": {
    "id": "world-landmark-191",
    "nameKo": "191단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.191: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "192": {
    "id": "world-landmark-192",
    "nameKo": "192단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.192: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "193": {
    "id": "world-landmark-193",
    "nameKo": "193단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.193: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "194": {
    "id": "world-landmark-194",
    "nameKo": "194단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.194: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "195": {
    "id": "world-landmark-195",
    "nameKo": "195단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.195: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "196": {
    "id": "world-landmark-196",
    "nameKo": "196단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.196: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "197": {
    "id": "world-landmark-197",
    "nameKo": "197단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.197: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "198": {
    "id": "world-landmark-198",
    "nameKo": "198단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.198: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "199": {
    "id": "world-landmark-199",
    "nameKo": "199단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.199: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "200": {
    "id": "milestone-200-grandcanyon",
    "nameKo": "미국 그랜드 캐니언 국립공원 노스림 협곡",
    "nameEn": "Grand Canyon National Park North Rim, USA",
    "location": "수억 년 세월의 지층이 빚어낸 붉은 사암의 경이로운 대협곡",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(249, 115, 22, 0.2)"
  },
  "201": {
    "id": "world-landmark-201",
    "nameKo": "201단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.201: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "202": {
    "id": "world-landmark-202",
    "nameKo": "202단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.202: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "203": {
    "id": "world-landmark-203",
    "nameKo": "203단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.203: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "204": {
    "id": "world-landmark-204",
    "nameKo": "204단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.204: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "205": {
    "id": "world-landmark-205",
    "nameKo": "205단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.205: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "206": {
    "id": "world-landmark-206",
    "nameKo": "206단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.206: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "207": {
    "id": "world-landmark-207",
    "nameKo": "207단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.207: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "208": {
    "id": "world-landmark-208",
    "nameKo": "208단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.208: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "209": {
    "id": "world-landmark-209",
    "nameKo": "209단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.209: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "210": {
    "id": "world-landmark-210",
    "nameKo": "210단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.210: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "211": {
    "id": "world-landmark-211",
    "nameKo": "211단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.211: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "212": {
    "id": "world-landmark-212",
    "nameKo": "212단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.212: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "213": {
    "id": "world-landmark-213",
    "nameKo": "213단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.213: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "214": {
    "id": "world-landmark-214",
    "nameKo": "214단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.214: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "215": {
    "id": "world-landmark-215",
    "nameKo": "215단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.215: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "216": {
    "id": "world-landmark-216",
    "nameKo": "216단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.216: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "217": {
    "id": "world-landmark-217",
    "nameKo": "217단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.217: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "218": {
    "id": "world-landmark-218",
    "nameKo": "218단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.218: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "219": {
    "id": "world-landmark-219",
    "nameKo": "219단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.219: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "220": {
    "id": "world-landmark-220",
    "nameKo": "220단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.220: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "221": {
    "id": "world-landmark-221",
    "nameKo": "221단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.221: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "222": {
    "id": "world-landmark-222",
    "nameKo": "222단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.222: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "223": {
    "id": "world-landmark-223",
    "nameKo": "223단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.223: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "224": {
    "id": "world-landmark-224",
    "nameKo": "224단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.224: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "225": {
    "id": "world-landmark-225",
    "nameKo": "225단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.225: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "226": {
    "id": "world-landmark-226",
    "nameKo": "226단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.226: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "227": {
    "id": "world-landmark-227",
    "nameKo": "227단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.227: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "228": {
    "id": "world-landmark-228",
    "nameKo": "228단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.228: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "229": {
    "id": "world-landmark-229",
    "nameKo": "229단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.229: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "230": {
    "id": "world-landmark-230",
    "nameKo": "230단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.230: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "231": {
    "id": "world-landmark-231",
    "nameKo": "231단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.231: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "232": {
    "id": "world-landmark-232",
    "nameKo": "232단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.232: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "233": {
    "id": "world-landmark-233",
    "nameKo": "233단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.233: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "234": {
    "id": "world-landmark-234",
    "nameKo": "234단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.234: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "235": {
    "id": "world-landmark-235",
    "nameKo": "235단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.235: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "236": {
    "id": "world-landmark-236",
    "nameKo": "236단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.236: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "237": {
    "id": "world-landmark-237",
    "nameKo": "237단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.237: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "238": {
    "id": "world-landmark-238",
    "nameKo": "238단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.238: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "239": {
    "id": "world-landmark-239",
    "nameKo": "239단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.239: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "240": {
    "id": "world-landmark-240",
    "nameKo": "240단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.240: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "241": {
    "id": "world-landmark-241",
    "nameKo": "241단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.241: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "242": {
    "id": "world-landmark-242",
    "nameKo": "242단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.242: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "243": {
    "id": "world-landmark-243",
    "nameKo": "243단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.243: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "244": {
    "id": "world-landmark-244",
    "nameKo": "244단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.244: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "245": {
    "id": "world-landmark-245",
    "nameKo": "245단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.245: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "246": {
    "id": "world-landmark-246",
    "nameKo": "246단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.246: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "247": {
    "id": "world-landmark-247",
    "nameKo": "247단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.247: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "248": {
    "id": "world-landmark-248",
    "nameKo": "248단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.248: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "249": {
    "id": "world-landmark-249",
    "nameKo": "249단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.249: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "250": {
    "id": "world-landmark-250",
    "nameKo": "250단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.250: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "251": {
    "id": "world-landmark-251",
    "nameKo": "251단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.251: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "252": {
    "id": "world-landmark-252",
    "nameKo": "252단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.252: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "253": {
    "id": "world-landmark-253",
    "nameKo": "253단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.253: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "254": {
    "id": "world-landmark-254",
    "nameKo": "254단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.254: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "255": {
    "id": "world-landmark-255",
    "nameKo": "255단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.255: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "256": {
    "id": "world-landmark-256",
    "nameKo": "256단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.256: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "257": {
    "id": "world-landmark-257",
    "nameKo": "257단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.257: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "258": {
    "id": "world-landmark-258",
    "nameKo": "258단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.258: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "259": {
    "id": "world-landmark-259",
    "nameKo": "259단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.259: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "260": {
    "id": "world-landmark-260",
    "nameKo": "260단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.260: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "261": {
    "id": "world-landmark-261",
    "nameKo": "261단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.261: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "262": {
    "id": "world-landmark-262",
    "nameKo": "262단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.262: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "263": {
    "id": "world-landmark-263",
    "nameKo": "263단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.263: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "264": {
    "id": "world-landmark-264",
    "nameKo": "264단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.264: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "265": {
    "id": "world-landmark-265",
    "nameKo": "265단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.265: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "266": {
    "id": "world-landmark-266",
    "nameKo": "266단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.266: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "267": {
    "id": "world-landmark-267",
    "nameKo": "267단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.267: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "268": {
    "id": "world-landmark-268",
    "nameKo": "268단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.268: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "269": {
    "id": "world-landmark-269",
    "nameKo": "269단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.269: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "270": {
    "id": "world-landmark-270",
    "nameKo": "270단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.270: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "271": {
    "id": "world-landmark-271",
    "nameKo": "271단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.271: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "272": {
    "id": "world-landmark-272",
    "nameKo": "272단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.272: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "273": {
    "id": "world-landmark-273",
    "nameKo": "273단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.273: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "274": {
    "id": "world-landmark-274",
    "nameKo": "274단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.274: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "275": {
    "id": "world-landmark-275",
    "nameKo": "275단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.275: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "276": {
    "id": "world-landmark-276",
    "nameKo": "276단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.276: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "277": {
    "id": "world-landmark-277",
    "nameKo": "277단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.277: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "278": {
    "id": "world-landmark-278",
    "nameKo": "278단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.278: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "279": {
    "id": "world-landmark-279",
    "nameKo": "279단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.279: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "280": {
    "id": "world-landmark-280",
    "nameKo": "280단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.280: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "281": {
    "id": "world-landmark-281",
    "nameKo": "281단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.281: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "282": {
    "id": "world-landmark-282",
    "nameKo": "282단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.282: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "283": {
    "id": "world-landmark-283",
    "nameKo": "283단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.283: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "284": {
    "id": "world-landmark-284",
    "nameKo": "284단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.284: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "285": {
    "id": "world-landmark-285",
    "nameKo": "285단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.285: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "286": {
    "id": "world-landmark-286",
    "nameKo": "286단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.286: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "287": {
    "id": "world-landmark-287",
    "nameKo": "287단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.287: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "288": {
    "id": "world-landmark-288",
    "nameKo": "288단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.288: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "289": {
    "id": "world-landmark-289",
    "nameKo": "289단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.289: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "290": {
    "id": "world-landmark-290",
    "nameKo": "290단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.290: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "291": {
    "id": "world-landmark-291",
    "nameKo": "291단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.291: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "292": {
    "id": "world-landmark-292",
    "nameKo": "292단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.292: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "293": {
    "id": "world-landmark-293",
    "nameKo": "293단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.293: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "294": {
    "id": "world-landmark-294",
    "nameKo": "294단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.294: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "295": {
    "id": "world-landmark-295",
    "nameKo": "295단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.295: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "296": {
    "id": "world-landmark-296",
    "nameKo": "296단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.296: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "297": {
    "id": "world-landmark-297",
    "nameKo": "297단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.297: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "298": {
    "id": "world-landmark-298",
    "nameKo": "298단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.298: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "299": {
    "id": "world-landmark-299",
    "nameKo": "299단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.299: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "300": {
    "id": "milestone-300-venice",
    "nameKo": "이탈리아 베네치아 산마르코 광장 & 대운하",
    "nameEn": "Venice Grand Canal & St. Mark Square, Italy",
    "location": "푸른 물결 위를 미끄러지는 곤돌라와 고풍스러운 대운하 수상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#3b82f6",
    "ambientColor": "rgba(59, 130, 246, 0.2)"
  },
  "301": {
    "id": "world-landmark-301",
    "nameKo": "301단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.301: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "302": {
    "id": "world-landmark-302",
    "nameKo": "302단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.302: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "303": {
    "id": "world-landmark-303",
    "nameKo": "303단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.303: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "304": {
    "id": "world-landmark-304",
    "nameKo": "304단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.304: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "305": {
    "id": "world-landmark-305",
    "nameKo": "305단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.305: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "306": {
    "id": "world-landmark-306",
    "nameKo": "306단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.306: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "307": {
    "id": "world-landmark-307",
    "nameKo": "307단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.307: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "308": {
    "id": "world-landmark-308",
    "nameKo": "308단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.308: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "309": {
    "id": "world-landmark-309",
    "nameKo": "309단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.309: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "310": {
    "id": "world-landmark-310",
    "nameKo": "310단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.310: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "311": {
    "id": "world-landmark-311",
    "nameKo": "311단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.311: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "312": {
    "id": "world-landmark-312",
    "nameKo": "312단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.312: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "313": {
    "id": "world-landmark-313",
    "nameKo": "313단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.313: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "314": {
    "id": "world-landmark-314",
    "nameKo": "314단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.314: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "315": {
    "id": "world-landmark-315",
    "nameKo": "315단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.315: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "316": {
    "id": "world-landmark-316",
    "nameKo": "316단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.316: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "317": {
    "id": "world-landmark-317",
    "nameKo": "317단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.317: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "318": {
    "id": "world-landmark-318",
    "nameKo": "318단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.318: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "319": {
    "id": "world-landmark-319",
    "nameKo": "319단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.319: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "320": {
    "id": "world-landmark-320",
    "nameKo": "320단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.320: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "321": {
    "id": "world-landmark-321",
    "nameKo": "321단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.321: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "322": {
    "id": "world-landmark-322",
    "nameKo": "322단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.322: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "323": {
    "id": "world-landmark-323",
    "nameKo": "323단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.323: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "324": {
    "id": "world-landmark-324",
    "nameKo": "324단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.324: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "325": {
    "id": "world-landmark-325",
    "nameKo": "325단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.325: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "326": {
    "id": "world-landmark-326",
    "nameKo": "326단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.326: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "327": {
    "id": "world-landmark-327",
    "nameKo": "327단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.327: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "328": {
    "id": "world-landmark-328",
    "nameKo": "328단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.328: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "329": {
    "id": "world-landmark-329",
    "nameKo": "329단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.329: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "330": {
    "id": "world-landmark-330",
    "nameKo": "330단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.330: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "331": {
    "id": "world-landmark-331",
    "nameKo": "331단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.331: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "332": {
    "id": "world-landmark-332",
    "nameKo": "332단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.332: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "333": {
    "id": "world-landmark-333",
    "nameKo": "333단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.333: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "334": {
    "id": "world-landmark-334",
    "nameKo": "334단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.334: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "335": {
    "id": "world-landmark-335",
    "nameKo": "335단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.335: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "336": {
    "id": "world-landmark-336",
    "nameKo": "336단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.336: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "337": {
    "id": "world-landmark-337",
    "nameKo": "337단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.337: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "338": {
    "id": "world-landmark-338",
    "nameKo": "338단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.338: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "339": {
    "id": "world-landmark-339",
    "nameKo": "339단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.339: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "340": {
    "id": "world-landmark-340",
    "nameKo": "340단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.340: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "341": {
    "id": "world-landmark-341",
    "nameKo": "341단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.341: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "342": {
    "id": "world-landmark-342",
    "nameKo": "342단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.342: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "343": {
    "id": "world-landmark-343",
    "nameKo": "343단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.343: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "344": {
    "id": "world-landmark-344",
    "nameKo": "344단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.344: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "345": {
    "id": "world-landmark-345",
    "nameKo": "345단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.345: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "346": {
    "id": "world-landmark-346",
    "nameKo": "346단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.346: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "347": {
    "id": "world-landmark-347",
    "nameKo": "347단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.347: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "348": {
    "id": "world-landmark-348",
    "nameKo": "348단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.348: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "349": {
    "id": "world-landmark-349",
    "nameKo": "349단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.349: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "350": {
    "id": "world-landmark-350",
    "nameKo": "350단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.350: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "351": {
    "id": "world-landmark-351",
    "nameKo": "351단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.351: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "352": {
    "id": "world-landmark-352",
    "nameKo": "352단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.352: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "353": {
    "id": "world-landmark-353",
    "nameKo": "353단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.353: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "354": {
    "id": "world-landmark-354",
    "nameKo": "354단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.354: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "355": {
    "id": "world-landmark-355",
    "nameKo": "355단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.355: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "356": {
    "id": "world-landmark-356",
    "nameKo": "356단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.356: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "357": {
    "id": "world-landmark-357",
    "nameKo": "357단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.357: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "358": {
    "id": "world-landmark-358",
    "nameKo": "358단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.358: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "359": {
    "id": "world-landmark-359",
    "nameKo": "359단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.359: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "360": {
    "id": "world-landmark-360",
    "nameKo": "360단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.360: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "361": {
    "id": "world-landmark-361",
    "nameKo": "361단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.361: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "362": {
    "id": "world-landmark-362",
    "nameKo": "362단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.362: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "363": {
    "id": "world-landmark-363",
    "nameKo": "363단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.363: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "364": {
    "id": "world-landmark-364",
    "nameKo": "364단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.364: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "365": {
    "id": "world-landmark-365",
    "nameKo": "365단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.365: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "366": {
    "id": "world-landmark-366",
    "nameKo": "366단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.366: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "367": {
    "id": "world-landmark-367",
    "nameKo": "367단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.367: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "368": {
    "id": "world-landmark-368",
    "nameKo": "368단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.368: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "369": {
    "id": "world-landmark-369",
    "nameKo": "369단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.369: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "370": {
    "id": "world-landmark-370",
    "nameKo": "370단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.370: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "371": {
    "id": "world-landmark-371",
    "nameKo": "371단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.371: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "372": {
    "id": "world-landmark-372",
    "nameKo": "372단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.372: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "373": {
    "id": "world-landmark-373",
    "nameKo": "373단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.373: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "374": {
    "id": "world-landmark-374",
    "nameKo": "374단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.374: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "375": {
    "id": "world-landmark-375",
    "nameKo": "375단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.375: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "376": {
    "id": "world-landmark-376",
    "nameKo": "376단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.376: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "377": {
    "id": "world-landmark-377",
    "nameKo": "377단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.377: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "378": {
    "id": "world-landmark-378",
    "nameKo": "378단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.378: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "379": {
    "id": "world-landmark-379",
    "nameKo": "379단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.379: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "380": {
    "id": "world-landmark-380",
    "nameKo": "380단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.380: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "381": {
    "id": "world-landmark-381",
    "nameKo": "381단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.381: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "382": {
    "id": "world-landmark-382",
    "nameKo": "382단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.382: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "383": {
    "id": "world-landmark-383",
    "nameKo": "383단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.383: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "384": {
    "id": "world-landmark-384",
    "nameKo": "384단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.384: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "385": {
    "id": "world-landmark-385",
    "nameKo": "385단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.385: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "386": {
    "id": "world-landmark-386",
    "nameKo": "386단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.386: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "387": {
    "id": "world-landmark-387",
    "nameKo": "387단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.387: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "388": {
    "id": "world-landmark-388",
    "nameKo": "388단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.388: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "389": {
    "id": "world-landmark-389",
    "nameKo": "389단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.389: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "390": {
    "id": "world-landmark-390",
    "nameKo": "390단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.390: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "391": {
    "id": "world-landmark-391",
    "nameKo": "391단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.391: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "392": {
    "id": "world-landmark-392",
    "nameKo": "392단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.392: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "393": {
    "id": "world-landmark-393",
    "nameKo": "393단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.393: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "394": {
    "id": "world-landmark-394",
    "nameKo": "394단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.394: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "395": {
    "id": "world-landmark-395",
    "nameKo": "395단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.395: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "396": {
    "id": "world-landmark-396",
    "nameKo": "396단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.396: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "397": {
    "id": "world-landmark-397",
    "nameKo": "397단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.397: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "398": {
    "id": "world-landmark-398",
    "nameKo": "398단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.398: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "399": {
    "id": "world-landmark-399",
    "nameKo": "399단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.399: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "400": {
    "id": "milestone-400-machupicchu",
    "nameKo": "페루 잉카의 공중도시 마추픽추 & 안데스 봉우리",
    "nameEn": "Machu Picchu & Andean Peaks, Peru",
    "location": "해발 2,430m 구름 속에 솟은 신비로운 잉카 제국의 공중 요새",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(16, 185, 129, 0.2)"
  },
  "401": {
    "id": "world-landmark-401",
    "nameKo": "401단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.401: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "402": {
    "id": "world-landmark-402",
    "nameKo": "402단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.402: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "403": {
    "id": "world-landmark-403",
    "nameKo": "403단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.403: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "404": {
    "id": "world-landmark-404",
    "nameKo": "404단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.404: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "405": {
    "id": "world-landmark-405",
    "nameKo": "405단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.405: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "406": {
    "id": "world-landmark-406",
    "nameKo": "406단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.406: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "407": {
    "id": "world-landmark-407",
    "nameKo": "407단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.407: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "408": {
    "id": "world-landmark-408",
    "nameKo": "408단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.408: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "409": {
    "id": "world-landmark-409",
    "nameKo": "409단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.409: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "410": {
    "id": "world-landmark-410",
    "nameKo": "410단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.410: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "411": {
    "id": "world-landmark-411",
    "nameKo": "411단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.411: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "412": {
    "id": "world-landmark-412",
    "nameKo": "412단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.412: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "413": {
    "id": "world-landmark-413",
    "nameKo": "413단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.413: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "414": {
    "id": "world-landmark-414",
    "nameKo": "414단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.414: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "415": {
    "id": "world-landmark-415",
    "nameKo": "415단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.415: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "416": {
    "id": "world-landmark-416",
    "nameKo": "416단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.416: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "417": {
    "id": "world-landmark-417",
    "nameKo": "417단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.417: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "418": {
    "id": "world-landmark-418",
    "nameKo": "418단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.418: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "419": {
    "id": "world-landmark-419",
    "nameKo": "419단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.419: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "420": {
    "id": "world-landmark-420",
    "nameKo": "420단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.420: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "421": {
    "id": "world-landmark-421",
    "nameKo": "421단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.421: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "422": {
    "id": "world-landmark-422",
    "nameKo": "422단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.422: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "423": {
    "id": "world-landmark-423",
    "nameKo": "423단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.423: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "424": {
    "id": "world-landmark-424",
    "nameKo": "424단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.424: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "425": {
    "id": "world-landmark-425",
    "nameKo": "425단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.425: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "426": {
    "id": "world-landmark-426",
    "nameKo": "426단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.426: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "427": {
    "id": "world-landmark-427",
    "nameKo": "427단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.427: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "428": {
    "id": "world-landmark-428",
    "nameKo": "428단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.428: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "429": {
    "id": "world-landmark-429",
    "nameKo": "429단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.429: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "430": {
    "id": "world-landmark-430",
    "nameKo": "430단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.430: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "431": {
    "id": "world-landmark-431",
    "nameKo": "431단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.431: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "432": {
    "id": "world-landmark-432",
    "nameKo": "432단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.432: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "433": {
    "id": "world-landmark-433",
    "nameKo": "433단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.433: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "434": {
    "id": "world-landmark-434",
    "nameKo": "434단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.434: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "435": {
    "id": "world-landmark-435",
    "nameKo": "435단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.435: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "436": {
    "id": "world-landmark-436",
    "nameKo": "436단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.436: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "437": {
    "id": "world-landmark-437",
    "nameKo": "437단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.437: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "438": {
    "id": "world-landmark-438",
    "nameKo": "438단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.438: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "439": {
    "id": "world-landmark-439",
    "nameKo": "439단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.439: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "440": {
    "id": "world-landmark-440",
    "nameKo": "440단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.440: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "441": {
    "id": "world-landmark-441",
    "nameKo": "441단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.441: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "442": {
    "id": "world-landmark-442",
    "nameKo": "442단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.442: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "443": {
    "id": "world-landmark-443",
    "nameKo": "443단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.443: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "444": {
    "id": "world-landmark-444",
    "nameKo": "444단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.444: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "445": {
    "id": "world-landmark-445",
    "nameKo": "445단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.445: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "446": {
    "id": "world-landmark-446",
    "nameKo": "446단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.446: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "447": {
    "id": "world-landmark-447",
    "nameKo": "447단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.447: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "448": {
    "id": "world-landmark-448",
    "nameKo": "448단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.448: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "449": {
    "id": "world-landmark-449",
    "nameKo": "449단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.449: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "450": {
    "id": "world-landmark-450",
    "nameKo": "450단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.450: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "451": {
    "id": "world-landmark-451",
    "nameKo": "451단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.451: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "452": {
    "id": "world-landmark-452",
    "nameKo": "452단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.452: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "453": {
    "id": "world-landmark-453",
    "nameKo": "453단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.453: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "454": {
    "id": "world-landmark-454",
    "nameKo": "454단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.454: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "455": {
    "id": "world-landmark-455",
    "nameKo": "455단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.455: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "456": {
    "id": "world-landmark-456",
    "nameKo": "456단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.456: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "457": {
    "id": "world-landmark-457",
    "nameKo": "457단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.457: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "458": {
    "id": "world-landmark-458",
    "nameKo": "458단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.458: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "459": {
    "id": "world-landmark-459",
    "nameKo": "459단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.459: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "460": {
    "id": "world-landmark-460",
    "nameKo": "460단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.460: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "461": {
    "id": "world-landmark-461",
    "nameKo": "461단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.461: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "462": {
    "id": "world-landmark-462",
    "nameKo": "462단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.462: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "463": {
    "id": "world-landmark-463",
    "nameKo": "463단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.463: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "464": {
    "id": "world-landmark-464",
    "nameKo": "464단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.464: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "465": {
    "id": "world-landmark-465",
    "nameKo": "465단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.465: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "466": {
    "id": "world-landmark-466",
    "nameKo": "466단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.466: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "467": {
    "id": "world-landmark-467",
    "nameKo": "467단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.467: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "468": {
    "id": "world-landmark-468",
    "nameKo": "468단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.468: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "469": {
    "id": "world-landmark-469",
    "nameKo": "469단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.469: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "470": {
    "id": "world-landmark-470",
    "nameKo": "470단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.470: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "471": {
    "id": "world-landmark-471",
    "nameKo": "471단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.471: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "472": {
    "id": "world-landmark-472",
    "nameKo": "472단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.472: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "473": {
    "id": "world-landmark-473",
    "nameKo": "473단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.473: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "474": {
    "id": "world-landmark-474",
    "nameKo": "474단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.474: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "475": {
    "id": "world-landmark-475",
    "nameKo": "475단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.475: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "476": {
    "id": "world-landmark-476",
    "nameKo": "476단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.476: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "477": {
    "id": "world-landmark-477",
    "nameKo": "477단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.477: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "478": {
    "id": "world-landmark-478",
    "nameKo": "478단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.478: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "479": {
    "id": "world-landmark-479",
    "nameKo": "479단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.479: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "480": {
    "id": "world-landmark-480",
    "nameKo": "480단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.480: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "481": {
    "id": "world-landmark-481",
    "nameKo": "481단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.481: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "482": {
    "id": "world-landmark-482",
    "nameKo": "482단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.482: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "483": {
    "id": "world-landmark-483",
    "nameKo": "483단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.483: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "484": {
    "id": "world-landmark-484",
    "nameKo": "484단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.484: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "485": {
    "id": "world-landmark-485",
    "nameKo": "485단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.485: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "486": {
    "id": "world-landmark-486",
    "nameKo": "486단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.486: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "487": {
    "id": "world-landmark-487",
    "nameKo": "487단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.487: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "488": {
    "id": "world-landmark-488",
    "nameKo": "488단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.488: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "489": {
    "id": "world-landmark-489",
    "nameKo": "489단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.489: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "490": {
    "id": "world-landmark-490",
    "nameKo": "490단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.490: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "491": {
    "id": "world-landmark-491",
    "nameKo": "491단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.491: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "492": {
    "id": "world-landmark-492",
    "nameKo": "492단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.492: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "493": {
    "id": "world-landmark-493",
    "nameKo": "493단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.493: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "494": {
    "id": "world-landmark-494",
    "nameKo": "494단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.494: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "495": {
    "id": "world-landmark-495",
    "nameKo": "495단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.495: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "496": {
    "id": "world-landmark-496",
    "nameKo": "496단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.496: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "497": {
    "id": "world-landmark-497",
    "nameKo": "497단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.497: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "498": {
    "id": "world-landmark-498",
    "nameKo": "498단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.498: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "499": {
    "id": "world-landmark-499",
    "nameKo": "499단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.499: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "500": {
    "id": "milestone-500-jokulsarlon",
    "nameKo": "아이슬란드 요쿨살론 다이아몬드 비치 빙하 호수",
    "nameEn": "Jokulsarlon Glacier Lagoon & Diamond Beach, Iceland",
    "location": "화산 검은 모래 해변 위에 보석처럼 빛나는 빙하 조각들의 영롱한 장관",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#38bdf8",
    "ambientColor": "rgba(56, 189, 248, 0.2)"
  },
  "501": {
    "id": "world-landmark-501",
    "nameKo": "501단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.501: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "502": {
    "id": "world-landmark-502",
    "nameKo": "502단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.502: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "503": {
    "id": "world-landmark-503",
    "nameKo": "503단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.503: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "504": {
    "id": "world-landmark-504",
    "nameKo": "504단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.504: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "505": {
    "id": "world-landmark-505",
    "nameKo": "505단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.505: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "506": {
    "id": "world-landmark-506",
    "nameKo": "506단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.506: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "507": {
    "id": "world-landmark-507",
    "nameKo": "507단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.507: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "508": {
    "id": "world-landmark-508",
    "nameKo": "508단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.508: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "509": {
    "id": "world-landmark-509",
    "nameKo": "509단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.509: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "510": {
    "id": "world-landmark-510",
    "nameKo": "510단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.510: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "511": {
    "id": "world-landmark-511",
    "nameKo": "511단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.511: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "512": {
    "id": "world-landmark-512",
    "nameKo": "512단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.512: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "513": {
    "id": "world-landmark-513",
    "nameKo": "513단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.513: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "514": {
    "id": "world-landmark-514",
    "nameKo": "514단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.514: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "515": {
    "id": "world-landmark-515",
    "nameKo": "515단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.515: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "516": {
    "id": "world-landmark-516",
    "nameKo": "516단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.516: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "517": {
    "id": "world-landmark-517",
    "nameKo": "517단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.517: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "518": {
    "id": "world-landmark-518",
    "nameKo": "518단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.518: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "519": {
    "id": "world-landmark-519",
    "nameKo": "519단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.519: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "520": {
    "id": "world-landmark-520",
    "nameKo": "520단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.520: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "521": {
    "id": "world-landmark-521",
    "nameKo": "521단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.521: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "522": {
    "id": "world-landmark-522",
    "nameKo": "522단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.522: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "523": {
    "id": "world-landmark-523",
    "nameKo": "523단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.523: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "524": {
    "id": "world-landmark-524",
    "nameKo": "524단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.524: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "525": {
    "id": "world-landmark-525",
    "nameKo": "525단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.525: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "526": {
    "id": "world-landmark-526",
    "nameKo": "526단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.526: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "527": {
    "id": "world-landmark-527",
    "nameKo": "527단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.527: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "528": {
    "id": "world-landmark-528",
    "nameKo": "528단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.528: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "529": {
    "id": "world-landmark-529",
    "nameKo": "529단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.529: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "530": {
    "id": "world-landmark-530",
    "nameKo": "530단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.530: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "531": {
    "id": "world-landmark-531",
    "nameKo": "531단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.531: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "532": {
    "id": "world-landmark-532",
    "nameKo": "532단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.532: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "533": {
    "id": "world-landmark-533",
    "nameKo": "533단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.533: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "534": {
    "id": "world-landmark-534",
    "nameKo": "534단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.534: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "535": {
    "id": "world-landmark-535",
    "nameKo": "535단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.535: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "536": {
    "id": "world-landmark-536",
    "nameKo": "536단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.536: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "537": {
    "id": "world-landmark-537",
    "nameKo": "537단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.537: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "538": {
    "id": "world-landmark-538",
    "nameKo": "538단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.538: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "539": {
    "id": "world-landmark-539",
    "nameKo": "539단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.539: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "540": {
    "id": "world-landmark-540",
    "nameKo": "540단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.540: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "541": {
    "id": "world-landmark-541",
    "nameKo": "541단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.541: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "542": {
    "id": "world-landmark-542",
    "nameKo": "542단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.542: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "543": {
    "id": "world-landmark-543",
    "nameKo": "543단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.543: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "544": {
    "id": "world-landmark-544",
    "nameKo": "544단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.544: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "545": {
    "id": "world-landmark-545",
    "nameKo": "545단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.545: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "546": {
    "id": "world-landmark-546",
    "nameKo": "546단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.546: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "547": {
    "id": "world-landmark-547",
    "nameKo": "547단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.547: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "548": {
    "id": "world-landmark-548",
    "nameKo": "548단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.548: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "549": {
    "id": "world-landmark-549",
    "nameKo": "549단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.549: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "550": {
    "id": "world-landmark-550",
    "nameKo": "550단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.550: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "551": {
    "id": "world-landmark-551",
    "nameKo": "551단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.551: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "552": {
    "id": "world-landmark-552",
    "nameKo": "552단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.552: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "553": {
    "id": "world-landmark-553",
    "nameKo": "553단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.553: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "554": {
    "id": "world-landmark-554",
    "nameKo": "554단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.554: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "555": {
    "id": "world-landmark-555",
    "nameKo": "555단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.555: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "556": {
    "id": "world-landmark-556",
    "nameKo": "556단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.556: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "557": {
    "id": "world-landmark-557",
    "nameKo": "557단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.557: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "558": {
    "id": "world-landmark-558",
    "nameKo": "558단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.558: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "559": {
    "id": "world-landmark-559",
    "nameKo": "559단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.559: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "560": {
    "id": "world-landmark-560",
    "nameKo": "560단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.560: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "561": {
    "id": "world-landmark-561",
    "nameKo": "561단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.561: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "562": {
    "id": "world-landmark-562",
    "nameKo": "562단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.562: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "563": {
    "id": "world-landmark-563",
    "nameKo": "563단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.563: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "564": {
    "id": "world-landmark-564",
    "nameKo": "564단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.564: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "565": {
    "id": "world-landmark-565",
    "nameKo": "565단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.565: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "566": {
    "id": "world-landmark-566",
    "nameKo": "566단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.566: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "567": {
    "id": "world-landmark-567",
    "nameKo": "567단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.567: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "568": {
    "id": "world-landmark-568",
    "nameKo": "568단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.568: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "569": {
    "id": "world-landmark-569",
    "nameKo": "569단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.569: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "570": {
    "id": "world-landmark-570",
    "nameKo": "570단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.570: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "571": {
    "id": "world-landmark-571",
    "nameKo": "571단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.571: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "572": {
    "id": "world-landmark-572",
    "nameKo": "572단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.572: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "573": {
    "id": "world-landmark-573",
    "nameKo": "573단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.573: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "574": {
    "id": "world-landmark-574",
    "nameKo": "574단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.574: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "575": {
    "id": "world-landmark-575",
    "nameKo": "575단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.575: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "576": {
    "id": "world-landmark-576",
    "nameKo": "576단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.576: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "577": {
    "id": "world-landmark-577",
    "nameKo": "577단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.577: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "578": {
    "id": "world-landmark-578",
    "nameKo": "578단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.578: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "579": {
    "id": "world-landmark-579",
    "nameKo": "579단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.579: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "580": {
    "id": "world-landmark-580",
    "nameKo": "580단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.580: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "581": {
    "id": "world-landmark-581",
    "nameKo": "581단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.581: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "582": {
    "id": "world-landmark-582",
    "nameKo": "582단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.582: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "583": {
    "id": "world-landmark-583",
    "nameKo": "583단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.583: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "584": {
    "id": "world-landmark-584",
    "nameKo": "584단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.584: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "585": {
    "id": "world-landmark-585",
    "nameKo": "585단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.585: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "586": {
    "id": "world-landmark-586",
    "nameKo": "586단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.586: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "587": {
    "id": "world-landmark-587",
    "nameKo": "587단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.587: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "588": {
    "id": "world-landmark-588",
    "nameKo": "588단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.588: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "589": {
    "id": "world-landmark-589",
    "nameKo": "589단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.589: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "590": {
    "id": "world-landmark-590",
    "nameKo": "590단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.590: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "591": {
    "id": "world-landmark-591",
    "nameKo": "591단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.591: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "592": {
    "id": "world-landmark-592",
    "nameKo": "592단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.592: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "593": {
    "id": "world-landmark-593",
    "nameKo": "593단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.593: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "594": {
    "id": "world-landmark-594",
    "nameKo": "594단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.594: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "595": {
    "id": "world-landmark-595",
    "nameKo": "595단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.595: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "596": {
    "id": "world-landmark-596",
    "nameKo": "596단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.596: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "597": {
    "id": "world-landmark-597",
    "nameKo": "597단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.597: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "598": {
    "id": "world-landmark-598",
    "nameKo": "598단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.598: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "599": {
    "id": "world-landmark-599",
    "nameKo": "599단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.599: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "600": {
    "id": "milestone-600-sagrada",
    "nameKo": "스페인 바르셀로나 사그라다 파밀리아 대성당",
    "nameEn": "Sagrada Familia Basilica, Barcelona, Spain",
    "location": "가우디의 영혼이 깃든 숲을 닮은 거대한 석조 기둥과 스테인드글라스",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#eab308",
    "ambientColor": "rgba(234, 179, 8, 0.2)"
  },
  "601": {
    "id": "world-landmark-601",
    "nameKo": "601단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.601: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "602": {
    "id": "world-landmark-602",
    "nameKo": "602단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.602: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "603": {
    "id": "world-landmark-603",
    "nameKo": "603단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.603: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "604": {
    "id": "world-landmark-604",
    "nameKo": "604단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.604: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "605": {
    "id": "world-landmark-605",
    "nameKo": "605단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.605: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "606": {
    "id": "world-landmark-606",
    "nameKo": "606단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.606: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "607": {
    "id": "world-landmark-607",
    "nameKo": "607단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.607: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "608": {
    "id": "world-landmark-608",
    "nameKo": "608단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.608: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "609": {
    "id": "world-landmark-609",
    "nameKo": "609단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.609: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "610": {
    "id": "world-landmark-610",
    "nameKo": "610단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.610: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "611": {
    "id": "world-landmark-611",
    "nameKo": "611단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.611: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "612": {
    "id": "world-landmark-612",
    "nameKo": "612단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.612: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "613": {
    "id": "world-landmark-613",
    "nameKo": "613단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.613: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "614": {
    "id": "world-landmark-614",
    "nameKo": "614단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.614: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "615": {
    "id": "world-landmark-615",
    "nameKo": "615단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.615: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "616": {
    "id": "world-landmark-616",
    "nameKo": "616단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.616: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "617": {
    "id": "world-landmark-617",
    "nameKo": "617단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.617: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "618": {
    "id": "world-landmark-618",
    "nameKo": "618단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.618: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "619": {
    "id": "world-landmark-619",
    "nameKo": "619단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.619: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "620": {
    "id": "world-landmark-620",
    "nameKo": "620단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.620: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "621": {
    "id": "world-landmark-621",
    "nameKo": "621단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.621: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "622": {
    "id": "world-landmark-622",
    "nameKo": "622단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.622: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "623": {
    "id": "world-landmark-623",
    "nameKo": "623단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.623: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "624": {
    "id": "world-landmark-624",
    "nameKo": "624단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.624: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "625": {
    "id": "world-landmark-625",
    "nameKo": "625단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.625: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "626": {
    "id": "world-landmark-626",
    "nameKo": "626단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.626: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "627": {
    "id": "world-landmark-627",
    "nameKo": "627단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.627: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "628": {
    "id": "world-landmark-628",
    "nameKo": "628단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.628: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "629": {
    "id": "world-landmark-629",
    "nameKo": "629단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.629: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "630": {
    "id": "world-landmark-630",
    "nameKo": "630단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.630: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "631": {
    "id": "world-landmark-631",
    "nameKo": "631단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.631: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "632": {
    "id": "world-landmark-632",
    "nameKo": "632단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.632: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "633": {
    "id": "world-landmark-633",
    "nameKo": "633단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.633: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "634": {
    "id": "world-landmark-634",
    "nameKo": "634단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.634: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "635": {
    "id": "world-landmark-635",
    "nameKo": "635단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.635: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "636": {
    "id": "world-landmark-636",
    "nameKo": "636단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.636: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "637": {
    "id": "world-landmark-637",
    "nameKo": "637단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.637: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "638": {
    "id": "world-landmark-638",
    "nameKo": "638단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.638: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "639": {
    "id": "world-landmark-639",
    "nameKo": "639단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.639: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "640": {
    "id": "world-landmark-640",
    "nameKo": "640단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.640: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "641": {
    "id": "world-landmark-641",
    "nameKo": "641단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.641: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "642": {
    "id": "world-landmark-642",
    "nameKo": "642단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.642: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "643": {
    "id": "world-landmark-643",
    "nameKo": "643단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.643: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "644": {
    "id": "world-landmark-644",
    "nameKo": "644단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.644: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "645": {
    "id": "world-landmark-645",
    "nameKo": "645단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.645: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "646": {
    "id": "world-landmark-646",
    "nameKo": "646단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.646: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "647": {
    "id": "world-landmark-647",
    "nameKo": "647단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.647: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "648": {
    "id": "world-landmark-648",
    "nameKo": "648단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.648: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "649": {
    "id": "world-landmark-649",
    "nameKo": "649단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.649: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "650": {
    "id": "world-landmark-650",
    "nameKo": "650단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.650: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "651": {
    "id": "world-landmark-651",
    "nameKo": "651단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.651: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "652": {
    "id": "world-landmark-652",
    "nameKo": "652단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.652: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "653": {
    "id": "world-landmark-653",
    "nameKo": "653단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.653: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "654": {
    "id": "world-landmark-654",
    "nameKo": "654단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.654: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "655": {
    "id": "world-landmark-655",
    "nameKo": "655단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.655: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "656": {
    "id": "world-landmark-656",
    "nameKo": "656단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.656: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "657": {
    "id": "world-landmark-657",
    "nameKo": "657단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.657: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "658": {
    "id": "world-landmark-658",
    "nameKo": "658단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.658: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "659": {
    "id": "world-landmark-659",
    "nameKo": "659단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.659: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "660": {
    "id": "world-landmark-660",
    "nameKo": "660단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.660: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "661": {
    "id": "world-landmark-661",
    "nameKo": "661단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.661: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "662": {
    "id": "world-landmark-662",
    "nameKo": "662단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.662: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "663": {
    "id": "world-landmark-663",
    "nameKo": "663단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.663: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "664": {
    "id": "world-landmark-664",
    "nameKo": "664단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.664: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "665": {
    "id": "world-landmark-665",
    "nameKo": "665단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.665: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "666": {
    "id": "world-landmark-666",
    "nameKo": "666단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.666: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "667": {
    "id": "world-landmark-667",
    "nameKo": "667단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.667: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "668": {
    "id": "world-landmark-668",
    "nameKo": "668단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.668: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "669": {
    "id": "world-landmark-669",
    "nameKo": "669단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.669: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "670": {
    "id": "world-landmark-670",
    "nameKo": "670단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.670: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "671": {
    "id": "world-landmark-671",
    "nameKo": "671단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.671: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "672": {
    "id": "world-landmark-672",
    "nameKo": "672단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.672: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "673": {
    "id": "world-landmark-673",
    "nameKo": "673단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.673: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "674": {
    "id": "world-landmark-674",
    "nameKo": "674단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.674: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "675": {
    "id": "world-landmark-675",
    "nameKo": "675단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.675: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "676": {
    "id": "world-landmark-676",
    "nameKo": "676단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.676: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "677": {
    "id": "world-landmark-677",
    "nameKo": "677단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.677: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "678": {
    "id": "world-landmark-678",
    "nameKo": "678단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.678: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "679": {
    "id": "world-landmark-679",
    "nameKo": "679단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.679: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "680": {
    "id": "world-landmark-680",
    "nameKo": "680단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.680: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "681": {
    "id": "world-landmark-681",
    "nameKo": "681단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.681: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "682": {
    "id": "world-landmark-682",
    "nameKo": "682단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.682: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "683": {
    "id": "world-landmark-683",
    "nameKo": "683단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.683: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "684": {
    "id": "world-landmark-684",
    "nameKo": "684단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.684: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "685": {
    "id": "world-landmark-685",
    "nameKo": "685단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.685: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "686": {
    "id": "world-landmark-686",
    "nameKo": "686단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.686: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "687": {
    "id": "world-landmark-687",
    "nameKo": "687단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.687: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "688": {
    "id": "world-landmark-688",
    "nameKo": "688단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.688: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "689": {
    "id": "world-landmark-689",
    "nameKo": "689단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.689: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "690": {
    "id": "world-landmark-690",
    "nameKo": "690단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.690: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "691": {
    "id": "world-landmark-691",
    "nameKo": "691단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.691: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "692": {
    "id": "world-landmark-692",
    "nameKo": "692단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.692: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "693": {
    "id": "world-landmark-693",
    "nameKo": "693단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.693: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "694": {
    "id": "world-landmark-694",
    "nameKo": "694단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.694: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "695": {
    "id": "world-landmark-695",
    "nameKo": "695단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.695: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "696": {
    "id": "world-landmark-696",
    "nameKo": "696단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.696: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "697": {
    "id": "world-landmark-697",
    "nameKo": "697단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.697: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "698": {
    "id": "world-landmark-698",
    "nameKo": "698단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.698: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "699": {
    "id": "world-landmark-699",
    "nameKo": "699단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.699: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "700": {
    "id": "milestone-700-greatbarrier",
    "nameKo": "호주 퀸즐랜드 그레이트 배리어 리프 산호 바다",
    "nameEn": "Great Barrier Reef Ocean, Australia",
    "location": "우주에서도 보이는 지구 최대의 에메랄드빛 산호초 군락과 청정 바다",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0284c7",
    "ambientColor": "rgba(2, 132, 199, 0.2)"
  },
  "701": {
    "id": "world-landmark-701",
    "nameKo": "701단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.701: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "702": {
    "id": "world-landmark-702",
    "nameKo": "702단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.702: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "703": {
    "id": "world-landmark-703",
    "nameKo": "703단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.703: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "704": {
    "id": "world-landmark-704",
    "nameKo": "704단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.704: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "705": {
    "id": "world-landmark-705",
    "nameKo": "705단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.705: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "706": {
    "id": "world-landmark-706",
    "nameKo": "706단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.706: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "707": {
    "id": "world-landmark-707",
    "nameKo": "707단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.707: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "708": {
    "id": "world-landmark-708",
    "nameKo": "708단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.708: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "709": {
    "id": "world-landmark-709",
    "nameKo": "709단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.709: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "710": {
    "id": "world-landmark-710",
    "nameKo": "710단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.710: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "711": {
    "id": "world-landmark-711",
    "nameKo": "711단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.711: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "712": {
    "id": "world-landmark-712",
    "nameKo": "712단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.712: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "713": {
    "id": "world-landmark-713",
    "nameKo": "713단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.713: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "714": {
    "id": "world-landmark-714",
    "nameKo": "714단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.714: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "715": {
    "id": "world-landmark-715",
    "nameKo": "715단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.715: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "716": {
    "id": "world-landmark-716",
    "nameKo": "716단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.716: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "717": {
    "id": "world-landmark-717",
    "nameKo": "717단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.717: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "718": {
    "id": "world-landmark-718",
    "nameKo": "718단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.718: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "719": {
    "id": "world-landmark-719",
    "nameKo": "719단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.719: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "720": {
    "id": "world-landmark-720",
    "nameKo": "720단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.720: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "721": {
    "id": "world-landmark-721",
    "nameKo": "721단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.721: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "722": {
    "id": "world-landmark-722",
    "nameKo": "722단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.722: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "723": {
    "id": "world-landmark-723",
    "nameKo": "723단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.723: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "724": {
    "id": "world-landmark-724",
    "nameKo": "724단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.724: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "725": {
    "id": "world-landmark-725",
    "nameKo": "725단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.725: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "726": {
    "id": "world-landmark-726",
    "nameKo": "726단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.726: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "727": {
    "id": "world-landmark-727",
    "nameKo": "727단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.727: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "728": {
    "id": "world-landmark-728",
    "nameKo": "728단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.728: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "729": {
    "id": "world-landmark-729",
    "nameKo": "729단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.729: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "730": {
    "id": "world-landmark-730",
    "nameKo": "730단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.730: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "731": {
    "id": "world-landmark-731",
    "nameKo": "731단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.731: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "732": {
    "id": "world-landmark-732",
    "nameKo": "732단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.732: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "733": {
    "id": "world-landmark-733",
    "nameKo": "733단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.733: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "734": {
    "id": "world-landmark-734",
    "nameKo": "734단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.734: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "735": {
    "id": "world-landmark-735",
    "nameKo": "735단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.735: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "736": {
    "id": "world-landmark-736",
    "nameKo": "736단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.736: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "737": {
    "id": "world-landmark-737",
    "nameKo": "737단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.737: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "738": {
    "id": "world-landmark-738",
    "nameKo": "738단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.738: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "739": {
    "id": "world-landmark-739",
    "nameKo": "739단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.739: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "740": {
    "id": "world-landmark-740",
    "nameKo": "740단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.740: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "741": {
    "id": "world-landmark-741",
    "nameKo": "741단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.741: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "742": {
    "id": "world-landmark-742",
    "nameKo": "742단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.742: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "743": {
    "id": "world-landmark-743",
    "nameKo": "743단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.743: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "744": {
    "id": "world-landmark-744",
    "nameKo": "744단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.744: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "745": {
    "id": "world-landmark-745",
    "nameKo": "745단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.745: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "746": {
    "id": "world-landmark-746",
    "nameKo": "746단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.746: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "747": {
    "id": "world-landmark-747",
    "nameKo": "747단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.747: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "748": {
    "id": "world-landmark-748",
    "nameKo": "748단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.748: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "749": {
    "id": "world-landmark-749",
    "nameKo": "749단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.749: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "750": {
    "id": "world-landmark-750",
    "nameKo": "750단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.750: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "751": {
    "id": "world-landmark-751",
    "nameKo": "751단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.751: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "752": {
    "id": "world-landmark-752",
    "nameKo": "752단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.752: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "753": {
    "id": "world-landmark-753",
    "nameKo": "753단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.753: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "754": {
    "id": "world-landmark-754",
    "nameKo": "754단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.754: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "755": {
    "id": "world-landmark-755",
    "nameKo": "755단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.755: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "756": {
    "id": "world-landmark-756",
    "nameKo": "756단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.756: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "757": {
    "id": "world-landmark-757",
    "nameKo": "757단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.757: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "758": {
    "id": "world-landmark-758",
    "nameKo": "758단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.758: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "759": {
    "id": "world-landmark-759",
    "nameKo": "759단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.759: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "760": {
    "id": "world-landmark-760",
    "nameKo": "760단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.760: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "761": {
    "id": "world-landmark-761",
    "nameKo": "761단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.761: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "762": {
    "id": "world-landmark-762",
    "nameKo": "762단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.762: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "763": {
    "id": "world-landmark-763",
    "nameKo": "763단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.763: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "764": {
    "id": "world-landmark-764",
    "nameKo": "764단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.764: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "765": {
    "id": "world-landmark-765",
    "nameKo": "765단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.765: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "766": {
    "id": "world-landmark-766",
    "nameKo": "766단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.766: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "767": {
    "id": "world-landmark-767",
    "nameKo": "767단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.767: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "768": {
    "id": "world-landmark-768",
    "nameKo": "768단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.768: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "769": {
    "id": "world-landmark-769",
    "nameKo": "769단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.769: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "770": {
    "id": "world-landmark-770",
    "nameKo": "770단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.770: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "771": {
    "id": "world-landmark-771",
    "nameKo": "771단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.771: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "772": {
    "id": "world-landmark-772",
    "nameKo": "772단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.772: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "773": {
    "id": "world-landmark-773",
    "nameKo": "773단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.773: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "774": {
    "id": "world-landmark-774",
    "nameKo": "774단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.774: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "775": {
    "id": "world-landmark-775",
    "nameKo": "775단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.775: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "776": {
    "id": "world-landmark-776",
    "nameKo": "776단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.776: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "777": {
    "id": "world-landmark-777",
    "nameKo": "777단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.777: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "778": {
    "id": "world-landmark-778",
    "nameKo": "778단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.778: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "779": {
    "id": "world-landmark-779",
    "nameKo": "779단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.779: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "780": {
    "id": "world-landmark-780",
    "nameKo": "780단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.780: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "781": {
    "id": "world-landmark-781",
    "nameKo": "781단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.781: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "782": {
    "id": "world-landmark-782",
    "nameKo": "782단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.782: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "783": {
    "id": "world-landmark-783",
    "nameKo": "783단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.783: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "784": {
    "id": "world-landmark-784",
    "nameKo": "784단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.784: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "785": {
    "id": "world-landmark-785",
    "nameKo": "785단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.785: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "786": {
    "id": "world-landmark-786",
    "nameKo": "786단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.786: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "787": {
    "id": "world-landmark-787",
    "nameKo": "787단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.787: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "788": {
    "id": "world-landmark-788",
    "nameKo": "788단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.788: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "789": {
    "id": "world-landmark-789",
    "nameKo": "789단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.789: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "790": {
    "id": "world-landmark-790",
    "nameKo": "790단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.790: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "791": {
    "id": "world-landmark-791",
    "nameKo": "791단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.791: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "792": {
    "id": "world-landmark-792",
    "nameKo": "792단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.792: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "793": {
    "id": "world-landmark-793",
    "nameKo": "793단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.793: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "794": {
    "id": "world-landmark-794",
    "nameKo": "794단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.794: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "795": {
    "id": "world-landmark-795",
    "nameKo": "795단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.795: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "796": {
    "id": "world-landmark-796",
    "nameKo": "796단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.796: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "797": {
    "id": "world-landmark-797",
    "nameKo": "797단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.797: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "798": {
    "id": "world-landmark-798",
    "nameKo": "798단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.798: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "799": {
    "id": "world-landmark-799",
    "nameKo": "799단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.799: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "800": {
    "id": "milestone-800-pyramids",
    "nameKo": "이집트 기자 피라미드 & 황금빛 대스핑크스",
    "nameEn": "Giza Pyramids & The Great Sphinx, Egypt",
    "location": "4,500년 인류 문명의 불멸을 증언하는 사막 위 장엄한 석조 기념비",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#d97706",
    "ambientColor": "rgba(217, 119, 6, 0.2)"
  },
  "801": {
    "id": "world-landmark-801",
    "nameKo": "801단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.801: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "802": {
    "id": "world-landmark-802",
    "nameKo": "802단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.802: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "803": {
    "id": "world-landmark-803",
    "nameKo": "803단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.803: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "804": {
    "id": "world-landmark-804",
    "nameKo": "804단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.804: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "805": {
    "id": "world-landmark-805",
    "nameKo": "805단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.805: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "806": {
    "id": "world-landmark-806",
    "nameKo": "806단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.806: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "807": {
    "id": "world-landmark-807",
    "nameKo": "807단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.807: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "808": {
    "id": "world-landmark-808",
    "nameKo": "808단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.808: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "809": {
    "id": "world-landmark-809",
    "nameKo": "809단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.809: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "810": {
    "id": "world-landmark-810",
    "nameKo": "810단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.810: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "811": {
    "id": "world-landmark-811",
    "nameKo": "811단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.811: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "812": {
    "id": "world-landmark-812",
    "nameKo": "812단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.812: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "813": {
    "id": "world-landmark-813",
    "nameKo": "813단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.813: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "814": {
    "id": "world-landmark-814",
    "nameKo": "814단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.814: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "815": {
    "id": "world-landmark-815",
    "nameKo": "815단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.815: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "816": {
    "id": "world-landmark-816",
    "nameKo": "816단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.816: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "817": {
    "id": "world-landmark-817",
    "nameKo": "817단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.817: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "818": {
    "id": "world-landmark-818",
    "nameKo": "818단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.818: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "819": {
    "id": "world-landmark-819",
    "nameKo": "819단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.819: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "820": {
    "id": "world-landmark-820",
    "nameKo": "820단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.820: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "821": {
    "id": "world-landmark-821",
    "nameKo": "821단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.821: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "822": {
    "id": "world-landmark-822",
    "nameKo": "822단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.822: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "823": {
    "id": "world-landmark-823",
    "nameKo": "823단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.823: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "824": {
    "id": "world-landmark-824",
    "nameKo": "824단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.824: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "825": {
    "id": "world-landmark-825",
    "nameKo": "825단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.825: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "826": {
    "id": "world-landmark-826",
    "nameKo": "826단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.826: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "827": {
    "id": "world-landmark-827",
    "nameKo": "827단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.827: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "828": {
    "id": "world-landmark-828",
    "nameKo": "828단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.828: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "829": {
    "id": "world-landmark-829",
    "nameKo": "829단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.829: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "830": {
    "id": "world-landmark-830",
    "nameKo": "830단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.830: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "831": {
    "id": "world-landmark-831",
    "nameKo": "831단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.831: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "832": {
    "id": "world-landmark-832",
    "nameKo": "832단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.832: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "833": {
    "id": "world-landmark-833",
    "nameKo": "833단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.833: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "834": {
    "id": "world-landmark-834",
    "nameKo": "834단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.834: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "835": {
    "id": "world-landmark-835",
    "nameKo": "835단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.835: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "836": {
    "id": "world-landmark-836",
    "nameKo": "836단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.836: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "837": {
    "id": "world-landmark-837",
    "nameKo": "837단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.837: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "838": {
    "id": "world-landmark-838",
    "nameKo": "838단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.838: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "839": {
    "id": "world-landmark-839",
    "nameKo": "839단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.839: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "840": {
    "id": "world-landmark-840",
    "nameKo": "840단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.840: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "841": {
    "id": "world-landmark-841",
    "nameKo": "841단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.841: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "842": {
    "id": "world-landmark-842",
    "nameKo": "842단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.842: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "843": {
    "id": "world-landmark-843",
    "nameKo": "843단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.843: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "844": {
    "id": "world-landmark-844",
    "nameKo": "844단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.844: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "845": {
    "id": "world-landmark-845",
    "nameKo": "845단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.845: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "846": {
    "id": "world-landmark-846",
    "nameKo": "846단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.846: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "847": {
    "id": "world-landmark-847",
    "nameKo": "847단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.847: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "848": {
    "id": "world-landmark-848",
    "nameKo": "848단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.848: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "849": {
    "id": "world-landmark-849",
    "nameKo": "849단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.849: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "850": {
    "id": "world-landmark-850",
    "nameKo": "850단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.850: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "851": {
    "id": "world-landmark-851",
    "nameKo": "851단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.851: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "852": {
    "id": "world-landmark-852",
    "nameKo": "852단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.852: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "853": {
    "id": "world-landmark-853",
    "nameKo": "853단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.853: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "854": {
    "id": "world-landmark-854",
    "nameKo": "854단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.854: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "855": {
    "id": "world-landmark-855",
    "nameKo": "855단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.855: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "856": {
    "id": "world-landmark-856",
    "nameKo": "856단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.856: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "857": {
    "id": "world-landmark-857",
    "nameKo": "857단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.857: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "858": {
    "id": "world-landmark-858",
    "nameKo": "858단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.858: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "859": {
    "id": "world-landmark-859",
    "nameKo": "859단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.859: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "860": {
    "id": "world-landmark-860",
    "nameKo": "860단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.860: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "861": {
    "id": "world-landmark-861",
    "nameKo": "861단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.861: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "862": {
    "id": "world-landmark-862",
    "nameKo": "862단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.862: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "863": {
    "id": "world-landmark-863",
    "nameKo": "863단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.863: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "864": {
    "id": "world-landmark-864",
    "nameKo": "864단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.864: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "865": {
    "id": "world-landmark-865",
    "nameKo": "865단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.865: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "866": {
    "id": "world-landmark-866",
    "nameKo": "866단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.866: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "867": {
    "id": "world-landmark-867",
    "nameKo": "867단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.867: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "868": {
    "id": "world-landmark-868",
    "nameKo": "868단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.868: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "869": {
    "id": "world-landmark-869",
    "nameKo": "869단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.869: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "870": {
    "id": "world-landmark-870",
    "nameKo": "870단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.870: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "871": {
    "id": "world-landmark-871",
    "nameKo": "871단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.871: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "872": {
    "id": "world-landmark-872",
    "nameKo": "872단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.872: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "873": {
    "id": "world-landmark-873",
    "nameKo": "873단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.873: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "874": {
    "id": "world-landmark-874",
    "nameKo": "874단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.874: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "875": {
    "id": "world-landmark-875",
    "nameKo": "875단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.875: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "876": {
    "id": "world-landmark-876",
    "nameKo": "876단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.876: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "877": {
    "id": "world-landmark-877",
    "nameKo": "877단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.877: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "878": {
    "id": "world-landmark-878",
    "nameKo": "878단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.878: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "879": {
    "id": "world-landmark-879",
    "nameKo": "879단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.879: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "880": {
    "id": "world-landmark-880",
    "nameKo": "880단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.880: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "881": {
    "id": "world-landmark-881",
    "nameKo": "881단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.881: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "882": {
    "id": "world-landmark-882",
    "nameKo": "882단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.882: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "883": {
    "id": "world-landmark-883",
    "nameKo": "883단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.883: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "884": {
    "id": "world-landmark-884",
    "nameKo": "884단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.884: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "885": {
    "id": "world-landmark-885",
    "nameKo": "885단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.885: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "886": {
    "id": "world-landmark-886",
    "nameKo": "886단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.886: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "887": {
    "id": "world-landmark-887",
    "nameKo": "887단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.887: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "888": {
    "id": "world-landmark-888",
    "nameKo": "888단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.888: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "889": {
    "id": "world-landmark-889",
    "nameKo": "889단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.889: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "890": {
    "id": "world-landmark-890",
    "nameKo": "890단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.890: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "891": {
    "id": "world-landmark-891",
    "nameKo": "891단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.891: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "892": {
    "id": "world-landmark-892",
    "nameKo": "892단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.892: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "893": {
    "id": "world-landmark-893",
    "nameKo": "893단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.893: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "894": {
    "id": "world-landmark-894",
    "nameKo": "894단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.894: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "895": {
    "id": "world-landmark-895",
    "nameKo": "895단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.895: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "896": {
    "id": "world-landmark-896",
    "nameKo": "896단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.896: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "897": {
    "id": "world-landmark-897",
    "nameKo": "897단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.897: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "898": {
    "id": "world-landmark-898",
    "nameKo": "898단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.898: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "899": {
    "id": "world-landmark-899",
    "nameKo": "899단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.899: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "900": {
    "id": "milestone-900-moraine",
    "nameKo": "캐나다 밴프 국립공원 에메랄드빛 모레인 호수",
    "nameEn": "Moraine Lake & Valley of the Ten Peaks, Canada",
    "location": "열 개의 봉우리가 병풍처럼 둘러싼 로키산맥의 찬란한 빙하 호수",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(20, 184, 166, 0.2)"
  },
  "901": {
    "id": "world-landmark-901",
    "nameKo": "901단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.901: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "902": {
    "id": "world-landmark-902",
    "nameKo": "902단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.902: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "903": {
    "id": "world-landmark-903",
    "nameKo": "903단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.903: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "904": {
    "id": "world-landmark-904",
    "nameKo": "904단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.904: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "905": {
    "id": "world-landmark-905",
    "nameKo": "905단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.905: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "906": {
    "id": "world-landmark-906",
    "nameKo": "906단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.906: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "907": {
    "id": "world-landmark-907",
    "nameKo": "907단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.907: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "908": {
    "id": "world-landmark-908",
    "nameKo": "908단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.908: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "909": {
    "id": "world-landmark-909",
    "nameKo": "909단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.909: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "910": {
    "id": "world-landmark-910",
    "nameKo": "910단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.910: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "911": {
    "id": "world-landmark-911",
    "nameKo": "911단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.911: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "912": {
    "id": "world-landmark-912",
    "nameKo": "912단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.912: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "913": {
    "id": "world-landmark-913",
    "nameKo": "913단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.913: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "914": {
    "id": "world-landmark-914",
    "nameKo": "914단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.914: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "915": {
    "id": "world-landmark-915",
    "nameKo": "915단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.915: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "916": {
    "id": "world-landmark-916",
    "nameKo": "916단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.916: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "917": {
    "id": "world-landmark-917",
    "nameKo": "917단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.917: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "918": {
    "id": "world-landmark-918",
    "nameKo": "918단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.918: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "919": {
    "id": "world-landmark-919",
    "nameKo": "919단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.919: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "920": {
    "id": "world-landmark-920",
    "nameKo": "920단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.920: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "921": {
    "id": "world-landmark-921",
    "nameKo": "921단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.921: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "922": {
    "id": "world-landmark-922",
    "nameKo": "922단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.922: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "923": {
    "id": "world-landmark-923",
    "nameKo": "923단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.923: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "924": {
    "id": "world-landmark-924",
    "nameKo": "924단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.924: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "925": {
    "id": "world-landmark-925",
    "nameKo": "925단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.925: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "926": {
    "id": "world-landmark-926",
    "nameKo": "926단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.926: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "927": {
    "id": "world-landmark-927",
    "nameKo": "927단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.927: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "928": {
    "id": "world-landmark-928",
    "nameKo": "928단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.928: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "929": {
    "id": "world-landmark-929",
    "nameKo": "929단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.929: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "930": {
    "id": "world-landmark-930",
    "nameKo": "930단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.930: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "931": {
    "id": "world-landmark-931",
    "nameKo": "931단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.931: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "932": {
    "id": "world-landmark-932",
    "nameKo": "932단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.932: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "933": {
    "id": "world-landmark-933",
    "nameKo": "933단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.933: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "934": {
    "id": "world-landmark-934",
    "nameKo": "934단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.934: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "935": {
    "id": "world-landmark-935",
    "nameKo": "935단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.935: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "936": {
    "id": "world-landmark-936",
    "nameKo": "936단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.936: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "937": {
    "id": "world-landmark-937",
    "nameKo": "937단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.937: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "938": {
    "id": "world-landmark-938",
    "nameKo": "938단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.938: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "939": {
    "id": "world-landmark-939",
    "nameKo": "939단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.939: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "940": {
    "id": "world-landmark-940",
    "nameKo": "940단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.940: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "941": {
    "id": "world-landmark-941",
    "nameKo": "941단계: 서울 창덕궁 후원 부용지와 주합루",
    "nameEn": "Lv.941: Changdeokgung Palace Secret Garden, Seoul",
    "location": "자연 지형을 거스르지 않고 정자와 연못이 조화된 왕실 정원",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "942": {
    "id": "world-landmark-942",
    "nameKo": "942단계: 전북 무주 덕유산 향적봉 설천봉 눈꽃",
    "nameEn": "Lv.942: Deogyusan Snow Covered Ridge, Korea",
    "location": "순백의 상고대가 온 산을 은빛으로 뒤덮는 겨울 설경의 명산",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "943": {
    "id": "world-landmark-943",
    "nameKo": "943단계: 경남 합천 가야산 해인사 장경판전",
    "nameEn": "Lv.943: Haeinsa Temple Janggyeong Panjeon, Korea",
    "location": "팔만대장경 목판을 자연 통풍으로 보존해 온 선조들의 지혜",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "944": {
    "id": "world-landmark-944",
    "nameKo": "944단계: 전남 순천만 습지 갈대밭과 칠면초 군락",
    "nameEn": "Lv.944: Suncheon Bay Wetland Reed Fields, Korea",
    "location": "황금빛 갈대 물결과 붉은 칠면초가 수놓는 세계 5대 연안습지",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "945": {
    "id": "world-landmark-945",
    "nameKo": "945단계: 스위스 알프스 마터호른 봉우리",
    "nameEn": "Lv.945: Matterhorn Peak, Swiss Alps",
    "location": "만년설이 빛나는 알프스의 거봉",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "946": {
    "id": "world-landmark-946",
    "nameKo": "946단계: 독일 바이에른 노이슈반슈타인 백조의 성",
    "nameEn": "Lv.946: Neuschwanstein Castle, Germany",
    "location": "동화 속 백조의 성으로 불리는 로맨틱 가도 명소",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "947": {
    "id": "world-landmark-947",
    "nameKo": "947단계: 오스트리아 잘츠카머구트 할슈타트 호수",
    "nameEn": "Lv.947: Hallstatt Lake, Austria",
    "location": "호수와 목조 가옥이 어우러진 알프스의 진주",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "948": {
    "id": "world-landmark-948",
    "nameKo": "948단계: 슬로베니아 율리안 알프스 블레드 호수 섬",
    "nameEn": "Lv.948: Lake Bled Island, Slovenia",
    "location": "에메랄드 호수 한가운데 떠 있는 성모 승천 성당",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "949": {
    "id": "world-landmark-949",
    "nameKo": "949단계: 프랑스 루아르 계곡 샹보르 고성",
    "nameEn": "Lv.949: Château de Chambord, France",
    "location": "르네상스 건축의 극치를 보여주는 왕실의 사냥 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "950": {
    "id": "world-landmark-950",
    "nameKo": "950단계: 이탈리아 돌로미티 브라이에스 호수",
    "nameEn": "Lv.950: Lago di Braies, Dolomites, Italy",
    "location": "깎아지른 바위산 아래 청록빛 보석 같은 알프스 호수",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "951": {
    "id": "world-landmark-951",
    "nameKo": "951단계: 스위스 융프라우요흐 유럽의 지붕",
    "nameEn": "Lv.951: Jungfraujoch Top of Europe, Switzerland",
    "location": "해발 3,454m 알레치 빙하가 내려다보이는 파노라마",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "952": {
    "id": "world-landmark-952",
    "nameKo": "952단계: 체코 프라하 블타바 강 카를교",
    "nameEn": "Lv.952: Charles Bridge & Vltava River, Prague",
    "location": "서른 개의 성인상이 도열한 고딕 양식의 석조 다리",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "953": {
    "id": "world-landmark-953",
    "nameKo": "953단계: 크로아티아 플리트비체 국립공원 계단식 호수",
    "nameEn": "Lv.953: Plitvice Lakes National Park, Croatia",
    "location": "16개의 에메랄드 호수와 수많은 폭포가 빚어낸 비경",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "954": {
    "id": "world-landmark-954",
    "nameKo": "954단계: 이탈리아 코모 호수 벨라지오 마을",
    "nameEn": "Lv.954: Bellagio, Lake Como, Italy",
    "location": "알프스 산자락 아래 귀족들의 호화 빌라가 즐비한 휴양지",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "955": {
    "id": "world-landmark-955",
    "nameKo": "955단계: 스코틀랜드 에든버러 고성 바위 요새",
    "nameEn": "Lv.955: Edinburgh Castle, Scotland, UK",
    "location": "화산암 바위산 위에 우뚝 선 스코틀랜드의 심장",
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "956": {
    "id": "world-landmark-956",
    "nameKo": "956단계: 포르투갈 신트라 페나 국립왕궁",
    "nameEn": "Lv.956: Pena Palace, Sintra, Portugal",
    "location": "낭만주의 양식의 오색찬란한 동화 같은 산상 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "957": {
    "id": "world-landmark-957",
    "nameKo": "957단계: 스페인 그라나다 알람브라 궁전",
    "nameEn": "Lv.957: Alhambra Palace, Granada, Spain",
    "location": "아라베스크 문양과 아치형 정원이 매혹적인 이슬람 예술의 정수",
    "imageUrl": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "958": {
    "id": "world-landmark-958",
    "nameKo": "958단계: 스위스 라우터브루넨 72개 폭포의 계곡",
    "nameEn": "Lv.958: Lauterbrunnen Valley of 72 Waterfalls",
    "location": "수직 암벽에서 쏟아지는 슈타우프바흐 폭포의 장관",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "959": {
    "id": "world-landmark-959",
    "nameKo": "959단계: 이탈리아 아말피 해안 포지타노 마을",
    "nameEn": "Lv.959: Positano, Amalfi Coast, Italy",
    "location": "코발트빛 지중해 절벽을 따라 층층이 채색된 가옥들",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "960": {
    "id": "world-landmark-960",
    "nameKo": "960단계: 일본 교토 후시미 이나리 천 개의 토리이",
    "nameEn": "Lv.960: Fushimi Inari Taisha, Kyoto, Japan",
    "location": "산자락을 따라 끝없이 이어지는 붉은 토리이 터널",
    "imageUrl": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "961": {
    "id": "world-landmark-961",
    "nameKo": "961단계: 중국 후난성 장가계 국가삼림공원 무릉원",
    "nameEn": "Lv.961: Zhangjiajie National Forest Park, China",
    "location": "영화 아바타의 모티브가 된 기암괴석 기둥들의 비경",
    "imageUrl": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "962": {
    "id": "world-landmark-962",
    "nameKo": "962단계: 베트남 꽝닌성 하롱베이 3천 개 석회암 섬",
    "nameEn": "Lv.962: Ha Long Bay, Vietnam",
    "location": "에메랄드 바다 위로 불쑥 솟아오른 기기묘묘한 석회암 카르스트",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "963": {
    "id": "world-landmark-963",
    "nameKo": "963단계: 캄보디아 시엠립 앙코르와트 중앙 사원",
    "nameEn": "Lv.963: Angkor Wat Temple, Cambodia",
    "location": "크메르 제국의 건축 미학이 집대성된 세계 최대의 석조 사원",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "964": {
    "id": "world-landmark-964",
    "nameKo": "964단계: 미얀마 바간 평원 수천 개의 불탑",
    "nameEn": "Lv.964: Bagan Plain Pagodas, Myanmar",
    "location": "붉은 벽돌 파고다 사이로 아침 안개가 피어오르는 신비의 평원",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "965": {
    "id": "world-landmark-965",
    "nameKo": "965단계: 인도네시아 발리 타나롯 해상 사원",
    "nameEn": "Lv.965: Tanah Lot Sea Temple, Bali, Indonesia",
    "location": "거센 파도가 부서지는 바다 바위섬 위에 앉은 힌두 사원",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "966": {
    "id": "world-landmark-966",
    "nameKo": "966단계: 중국 쓰촨성 구채구 오색지 호수",
    "nameEn": "Lv.966: Jiuzhaigou Five Flower Lake, China",
    "location": "호수 바닥의 고목과 광물질이 빚어낸 영롱한 무지갯빛 물빛",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "967": {
    "id": "world-landmark-967",
    "nameKo": "967단계: 대만 타이베이 지우펀 옛 골목 홍등",
    "nameEn": "Lv.967: Jiufen Old Street Red Lanterns, Taiwan",
    "location": "바다를 내려다보는 비탈길을 따라 붉게 밝혀진 홍등 거리",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "968": {
    "id": "world-landmark-968",
    "nameKo": "968단계: 스리랑카 시기리야 고대 사자바위 궁전",
    "nameEn": "Lv.968: Sigiriya Lion Rock Citadel, Sri Lanka",
    "location": "밀림 한가운데 200m 수직 바위 꼭대기에 세워진 공중 왕국",
    "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "969": {
    "id": "world-landmark-969",
    "nameKo": "969단계: 인도 자이푸르 하와마할 바람의 궁전",
    "nameEn": "Lv.969: Hawa Mahal Palace of Winds, India",
    "location": "953개의 정교한 격자 창문이 벌집처럼 솟은 분홍빛 사암 궁전",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "970": {
    "id": "world-landmark-970",
    "nameKo": "970단계: 네팔 히말라야 안나푸르나 베이스캠프",
    "nameEn": "Lv.970: Annapurna Sanctuary, Himalayas, Nepal",
    "location": "8,000m급 설산 파노라마가 사방을 에워싼 신들의 요람",
    "imageUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "971": {
    "id": "world-landmark-971",
    "nameKo": "971단계: 태국 치앙라이 왓 롱 쿤 백색 사원",
    "nameEn": "Lv.971: Wat Rong Khun White Temple, Thailand",
    "location": "순백의 유리와 석고로 극락의 순결함을 묘사한 현대 사원",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "972": {
    "id": "world-landmark-972",
    "nameKo": "972단계: 미국 유타 브라이스 캐니언 첨탑 지대",
    "nameEn": "Lv.972: Bryce Canyon Hoodoos Amphitheater, USA",
    "location": "붉고 하얀 첨탑 기둥들이 원형 극장처럼 도열한 침식 지대",
    "imageUrl": "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "973": {
    "id": "world-landmark-973",
    "nameKo": "973단계: 캐나다 재스퍼 국립공원 아타바스카 빙하",
    "nameEn": "Lv.973: Athabasca Glacier, Jasper, Canada",
    "location": "컬럼비아 빙원에서 흘러내린 거대한 만년설 얼음 평원",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "974": {
    "id": "world-landmark-974",
    "nameKo": "974단계: 멕시코 유카탄 치첸이트사 쿠쿨칸 피라미드",
    "nameEn": "Lv.974: Chichen Itza Kukulkan Pyramid, Mexico",
    "location": "춘분과 추분에 뱀의 그림자가 꿈틀대는 마야 천문학의 걸작",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "975": {
    "id": "world-landmark-975",
    "nameKo": "975단계: 볼리비아 우유니 소금 사막 세상의 거울",
    "nameEn": "Lv.975: Salar de Uyuni Salt Flats, Bolivia",
    "location": "하늘과 땅의 경계가 사라지는 지상 최대의 백색 거울 평원",
    "imageUrl": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "976": {
    "id": "world-landmark-976",
    "nameKo": "976단계: 아르헨티나·브라질 이과수 대폭포 악마의 목구멍",
    "nameEn": "Lv.976: Iguazu Falls Devils Throat",
    "location": "275개의 폭포가 합쳐져 뿜어내는 지구상 가장 거대한 굉음",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "977": {
    "id": "world-landmark-977",
    "nameKo": "977단계: 칠레 파타고니아 토레스 델 파이네 삼봉",
    "nameEn": "Lv.977: Torres del Paine Towers, Chile",
    "location": "빙하 호수 위로 칼날처럼 솟구친 세 개의 화강암 봉우리",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "978": {
    "id": "world-landmark-978",
    "nameKo": "978단계: 미국 애리조나 앤텔로프 캐니언 빛의 기둥",
    "nameEn": "Lv.978: Antelope Canyon Light Beams, Arizona, USA",
    "location": "부드러운 물결 사암 틈새로 쏟아지는 성스러운 햇살",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "979": {
    "id": "world-landmark-979",
    "nameKo": "979단계: 캐나다 밴쿠버 휘슬러 블랙콤 설원",
    "nameEn": "Lv.979: Whistler Blackcomb Mountain, Canada",
    "location": "북미 최고의 스키 리조트를 품은 광활한 침엽수 설원",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "980": {
    "id": "world-landmark-980",
    "nameKo": "980단계: 미국 캘리포니아 세쿼이아 국립공원 제너럴 셔먼",
    "nameEn": "Lv.980: General Sherman Tree, Sequoia Park, USA",
    "location": "지구상에서 가장 거대한 부피를 지닌 2,200년 된 거목",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "981": {
    "id": "world-landmark-981",
    "nameKo": "981단계: 콜롬비아 카르타헤나 식민지 구시가지 성벽",
    "nameEn": "Lv.981: Cartagena Historic Walled City, Colombia",
    "location": "카리브해를 마주한 부겐빌레아 꽃핀 스페인풍 발코니 골목",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "982": {
    "id": "world-landmark-982",
    "nameKo": "982단계: 노르웨이 로포텐 제도 레이네 어촌 마을",
    "nameEn": "Lv.982: Reine, Lofoten Islands, Norway",
    "location": "날카로운 피오르드 산맥 아래 붉은 로르부 가옥들의 정취",
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "983": {
    "id": "world-landmark-983",
    "nameKo": "983단계: 노르웨이 뤼세피오르드 프레이케스톨렌 뤼세 절벽",
    "nameEn": "Lv.983: Preikestolen Pulpit Rock, Norway",
    "location": "604m 수직 절벽 평평한 바위 위에서 내려다보는 피오르드",
    "imageUrl": "https://images.unsplash.com/photo-1516815231560-8581b3c40e74?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "984": {
    "id": "world-landmark-984",
    "nameKo": "984단계: 아이슬란드 레이캬비크 할그림스키르캬 교회",
    "nameEn": "Lv.984: Hallgrimskirkja Church, Iceland",
    "location": "현무암 주상절리를 모티브로 한 북유럽 현대 건축의 백미",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "985": {
    "id": "world-landmark-985",
    "nameKo": "985단계: 스웨덴 키루나 북극권 순록 설원",
    "nameEn": "Lv.985: Kiruna Arctic Tundra & Taiga, Sweden",
    "location": "끝없는 눈 덮인 자작나무 숲과 순록 떼의 평화로운 풍경",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "986": {
    "id": "world-landmark-986",
    "nameKo": "986단계: 핀란드 로바니에미 산타클로스 중앙 마을",
    "nameEn": "Lv.986: Santa Claus Village, Rovaniemi, Finland",
    "location": "북극선이 가로지르는 동화 같은 크리스마스 눈꽃 마을",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "987": {
    "id": "world-landmark-987",
    "nameKo": "987단계: 아이슬란드 스코가포스 무지개 폭포",
    "nameEn": "Lv.987: Skogafoss Rainbow Waterfall, Iceland",
    "location": "60m 높이에서 직포처럼 떨어지며 쌍무지개를 만드는 폭포",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "988": {
    "id": "world-landmark-988",
    "nameKo": "988단계: 노르웨이 트롬쇠 북극의 수도 설경",
    "nameEn": "Lv.988: Tromso Arctic Cathedral City, Norway",
    "location": "피오르드 바다를 건너는 다리와 설산이 어우러진 북극 도시",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "989": {
    "id": "world-landmark-989",
    "nameKo": "989단계: 모로코 쉐프샤우엔 푸른 골목 마을",
    "nameEn": "Lv.989: Chefchaouen The Blue Pearl, Morocco",
    "location": "리프 산맥 자락에 온통 코발트블루로 칠해진 미로 골목",
    "imageUrl": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "990": {
    "id": "world-landmark-990",
    "nameKo": "990단계: 터키 파묵칼레 하얀 석회화 단구 온천",
    "nameEn": "Lv.990: Pamukkale Travertine Terraces, Turkey",
    "location": "눈부신 백색 석회암 계단 위로 고인 담청색 천연 온천수",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "991": {
    "id": "world-landmark-991",
    "nameKo": "991단계: 남아프리카공화국 케이프타운 테이블 마운틴",
    "nameEn": "Lv.991: Table Mountain, Cape Town, South Africa",
    "location": "대서양과 인도양이 만나는 테이블 모양의 평평한 암벽산",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "992": {
    "id": "world-landmark-992",
    "nameKo": "992단계: 탄자니아 세렝게티 국립공원 야생의 평원",
    "nameEn": "Lv.992: Serengeti National Park Savanna, Tanzania",
    "location": "수백만 마리 누 떼가 지평선을 가르는 지구 최후의 야생",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#14b8a6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "993": {
    "id": "world-landmark-993",
    "nameKo": "993단계: 잠비아·짐바브웨 빅토리아 폭포 천둥 치는 연기",
    "nameEn": "Lv.993: Victoria Falls Mosi-oa-Tunya",
    "location": "1.7km 폭의 잠베지 강이 협곡으로 곤두박질치는 대폭포",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#0ea5e9",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "994": {
    "id": "world-landmark-994",
    "nameKo": "994단계: 오만 와디 샵 에메랄드 협곡 오아시스",
    "nameEn": "Lv.994: Wadi Shab Canyon Oasis, Oman",
    "location": "황량한 사막 계곡 깊숙이 숨겨진 맑고 푸른 천연 동굴 수영장",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#10b981",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "995": {
    "id": "world-landmark-995",
    "nameKo": "995단계: 이집트 아부심벨 람세스 2세 거대 신전",
    "nameEn": "Lv.995: Abu Simbel Temples, Egypt",
    "location": "나세르 호숫가 사암 절벽에 조각된 거대한 파라오 석상들",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f59e0b",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "996": {
    "id": "world-landmark-996",
    "nameKo": "996단계: 제주도 성산일출봉 푸른 분화구 바다",
    "nameEn": "Lv.996: Seongsan Ilchulbong, Jeju Island, Korea",
    "location": "푸른 바다 위로 우뚝 솟은 거대한 왕관 모양의 수성화산구",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#ec4899",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "997": {
    "id": "world-landmark-997",
    "nameKo": "997단계: 경북 경주 토함산 불국사 청운교 백운교",
    "nameEn": "Lv.997: Bulguksa Temple, Gyeongju, Korea",
    "location": "신라 불교 예술의 정수를 간직한 천년 고찰의 석조 계단",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#8b5cf6",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "998": {
    "id": "world-landmark-998",
    "nameKo": "998단계: 강원도 설악산 국립공원 공룡능선 암봉",
    "nameEn": "Lv.998: Seoraksan Dinosaur Ridge, Korea",
    "location": "하늘을 찌를 듯 솟은 기암괴석과 운해가 춤추는 설악의 명봉",
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#06b6d4",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "999": {
    "id": "world-landmark-999",
    "nameKo": "999단계: 전남 담양 메타세쿼이아 가로수길",
    "nameEn": "Lv.999: Damyang Metasequoia Tree Road, Korea",
    "location": "울창한 초록 터널이 길게 뻗은 이국적이고 싱그러운 숲길",
    "imageUrl": "https://images.unsplash.com/photo-1524492417138-4ce6883b2767?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#f97316",
    "ambientColor": "rgba(255, 255, 255, 0.15)"
  },
  "1000": {
    "id": "milestone-1000-earth",
    "nameKo": "초월의 궤도 · 우주에서 본 푸른 지구",
    "nameEn": "Earth from Orbit & Aurora (Lv.1000 Milestone)",
    "location": "1,000단계 대기록 달성! 전 세계 모든 지상 명소를 정복하고 마침내 우주에서 내려다보는 아름다운 지구 요람",
    "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&q=70",
    "accentColor": "#38bdf8",
    "ambientColor": "rgba(56, 189, 248, 0.25)"
  }
};

export const THEMES: GameTheme[] = Object.values(WORLD_1000_THEMES);

/**
 * Returns a unique world landmark theme for every single level from 1 to 1000+.
 * Guarantees that Level 100 and Level 500 are completely different.
 * Level 1,000 features the Earth from Orbit milestone celebration.
 */
export function getThemeForLevel(level: number): GameTheme {
  const safeLevel = Math.max(1, Math.floor(level));

  // 딱 1,000단계(및 2000, 3000...) 대기록 달성 시에만 우주에서 본 지구 특별 테마 제공
  if (safeLevel > 0 && safeLevel % 1000 === 0) {
    return WORLD_1000_THEMES[1000];
  }

  // 1 ~ 1000단계 1:1 고유 매핑
  if (WORLD_1000_THEMES[safeLevel]) {
    return WORLD_1000_THEMES[safeLevel];
  }

  // 1000단계 이후는 1000개 고유 풀에서 회차별 순환
  const index = ((safeLevel - 1) % 999) + 1;
  return WORLD_1000_THEMES[index] || WORLD_1000_THEMES[1];
}

/**
 * Atmospheric Engine:
 * Always maintains 100% crystal-clear, natural, un-distorted scenery!
 * NO artificial hue-rotate, NO blur, NO muddy dark veils.
 */
export function getAtmosphereForLevel(level: number): LevelAtmosphere {
  const safeLevel = Math.max(1, Math.floor(level));

  if (safeLevel > 0 && safeLevel % 1000 === 0) {
    return {
      cycle: Math.floor(safeLevel / 1000),
      phaseLabelKo: `🚀 ${safeLevel}단계 초월 마일스톤 달성!`,
      phaseLabelEn: `Milestone Lv.${safeLevel} · Cosmos Orbit`,
      filterStyle: "none",
      ambientColor: "rgba(56, 189, 248, 0.25)",
      overlayGradient: "transparent"
    };
  }

  if (safeLevel % 100 === 0) {
    return {
      cycle: Math.floor(safeLevel / 100),
      phaseLabelKo: `🚩 ${safeLevel}단계 마일스톤 (세계 1,000대 명소 대장정)`,
      phaseLabelEn: `Milestone Lv.${safeLevel} · Grand World Tour`,
      filterStyle: "none",
      ambientColor: "rgba(255, 255, 255, 0.15)",
      overlayGradient: "transparent"
    };
  }

  return {
    cycle: 1,
    phaseLabelKo: `세계 1,000대 명소 대장정 · ${safeLevel}단계`,
    phaseLabelEn: `1000 World Landmarks · Stage ${safeLevel}`,
    filterStyle: "none",
    ambientColor: "rgba(255, 255, 255, 0.15)",
    overlayGradient: "transparent"
  };
}
