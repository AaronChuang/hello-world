import {
  mobile,
  backend,
  creator,
  web,
  spring,
  pnpm,
  vue,
  js,
  py,
  aws,
  sass,
  firebase,
  java,
  gcp,
  npm,
  regex,
  docker,
  git,
  kubernetes,
  tensorflow,
  ts,
  kotlin,
  quarkus,
  mongodb,
  css,
  azure,
  babel,
  gulp,
  selenium,
  html,
  gradle,
  insyde,
  groupkab,
  tdv,
  iisi,
  ehanlin, github
} from '@/utils/assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const intro = "資深全端開發人員，擁有 10 年以上經驗，熱衷於利用創新技術打造高效解決方案。擅長語言 Java、Kotlin，並在雲端技術（GCP、AWS、Azure）方面具有豐富經驗。曾參與開發大型教育平台、共乘 App 等多元專案，具備前端, 後端和手機端 (Android) 開發的能力。喜歡探索新技術，並善用 AI 工具提升效率。樂於團隊合作，具備領導能力，致力於交付高品質產品。";
const services = [
  {
    title: "Full-Stack Software Engineer",
    icon: web,
    x:0,
    y:0,
    w:2,
    h:2
  },
  {
    title: "Solution-Oriented Mindset",
    icon: mobile,
    x:2,
    y:0,
    w:2,
    h:2
  },
  {
    title: "Excellent Communicator",
    icon: backend,
    x:4,
    y:0,
    w:2,
    h:2
  },
  {
    title: "Lifelong Learner",
    icon: creator,
    x:6,
    y:0,
    w:2,
    h:2
  },
];

const technologies = [
  {
    title: "Main Programming Languages",
    skills: [
      { name: "Java", icon: java },
      { name: "Kotlin", icon: kotlin },
      { name: "Python", icon: py },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: html },
      { name: "JavaScript", icon: js },
      { name: "TypeScript", icon: ts },
      { name: "CSS", icon: css },
      { name: "Sass", icon: sass },
      { name: "Vue", icon: vue },
      { name: "Babel", icon: babel },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Quarkus", icon: quarkus },
      { name: "Spring", icon: spring }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: mongodb },
      { name: "Firebase", icon: firebase }
    ]
  },
  {
    title: "Cloud Services",
    skills: [
      { name: "AWS", icon: aws },
      { name: "Azure", icon: azure },
      { name: "GCP", icon: gcp },
    ]
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: docker },
      { name: "Kubernetes", icon: kubernetes },
    ]
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: git },
    ]
  },
  {
    title: "Package Management",
    skills: [
      { name: "npm", icon: npm },
      { name: "pnpm", icon: pnpm },
    ]
  },
  {
    title: "Other Tools & Technologies",
    skills: [
      { name: "Gradle", icon: gradle },
      { name: "Gulp", icon: gulp },
      { name: "Selenium", icon: selenium },
      { name: "TensorFlow", icon: tensorflow },
      { name: "Regex", icon: regex },
    ]
  }
];

const experiences = [
  {
    title: "Staff Engineer",
    company_name: "翰林教育科技股份有限公司",
    icon: ehanlin,
    color: "#ffffff",
    date: "2018/9 - 2024/8",
    points: [
      "負責開發一個供家長、學生和老師使用的教育平台，涵蓋使用者註冊登入、購物車、課程介紹頁面、客服後台、Line 通知、信件發送、家教平台（規劃師/學生/家教）、排課系統、金流串接、活潑素材平台等功能模組。",
      "充分利用 GCP (GKE, GCS, Pub/Sub, Cloud Scheduler, Speech to Text, Firebase) 構建微服務架構，實現前後端分離、服務間通訊、排程管理、語音辨識和即時互動等功能。",
      "運用 AWS S3 儲存使用者上傳的檔案，並透過 Azure Clarity 檢核畫面熱分布，提升使用者體驗。",
      "結合 ChatGPT、Gemini 和 GitHub Copilot，加速程式碼生成與調整，提升開發效率。",
      "成功串接 GCP Speech to Text 等 AI 服務，並透過參數調整和 prompt 優化，克服準確性和安全性挑戰。",
      "擅長運用 Java 和 Kotlin，並在 Kotlin 中使用 coroutine 實現 reactive 程式設計，提升開發效率。",
      "積極探索新技術，如 JDK 22 的 virtual threads，並進行實驗驗證其在 coroutine 中的應用潛力。",
      "採用前後端分離架構，確保畫面更新的靈活性，並有效處理快取問題。",
      "選擇 Vue.js 提升開發速度，同時運用 Shadow DOM 確保瀏覽器相容性。",
      "重視原生 JavaScript 的應用，減少對第三方庫的依賴，降低相容性風險。",
      "針對前端開發中的特定狀態畫面測試，設計專屬的假資料和資料接口，確保上線後的順利整合。",
      "成功開發並上線購物車組合包、家教平台整合與介面優化、Line 圖文選單與通知、客服後台整合等重要功能。",
      "獨立開發影音串流平台，運用 Amazon Kinesis Video Streams 的 WebRTC 技術實現家教與學生的即時互動，並結合 GCS 和 GKE 完成課程錄製與轉檔。",
      "透過耐心溝通與協調，確保開發與企劃目標一致，並帶領組員按時完成專案，展現專案管理和團隊合作能力。",
      "在解決問題、技術能力提升、團隊協作和溝通方面取得顯著進步。"
    ],
  },
  {
    title: "軟體工程師",
    company_name: "資拓宏宇國際股份有限公司",
    icon: iisi,
    color: "#C91426",
    date: "2017/7 - 2018/6",
    points: [
      "負責撰寫系統規格書，確保開發過程中的功能和需求準確性。",
      "開發系統輔助小工具，提升開發效率和系統效能。",
      "協助系統分析師撰寫技術文件及系統設計文件。",
      "撰寫教育訓練材料，並擔任內部培訓的授課講師。",
      "搭建自動化整合測試環境，使用 Selenium 進行系統整合測試。",
      "負責 Git 與 Redmine 的整合，提升版本控制和專案管理的效率。"
    ],
  },
  {
    title: "軟體工程師",
    company_name: "一二三視股份有限公司",
    icon: tdv,
    color: "#ffffff",
    date: "2016/5 - 2017/6",
    points: [
      "將公司的演算法整合在一起，通過 EMS 達到事件監控，並對事件進行特定反應。",
      "設計並建置資料庫表格，撰寫預存程序，提升查詢效率並進行定期的資料庫維護和備份。",
      "與第三方系統進行整合，實現 EMS 與繳費系統的資料庫溝通和事件處理。",
      "開發網站解決方案，使用 Nginx 和 PHP 來呈現事件資訊，並使用 Laravel、D3.js、Socket.io 等技術來實現需求。"
    ],
  },
  {
    title: "全端軟體工程師",
    company_name: "酷客移動資訊股份有限公司",
    icon: groupkab,
    color: "#ffffff",
    date: "2015/7 - 2016/3",
    points: [
      "利用 Google APIs 和 Google Cloud Platform 開發共乘 APP，旨在降低計程車費用。",
      "撰寫和測試演算法，進行最佳配對，並產生報告。",
      "簡易修改與維護網站和資料庫，確保系統穩定運行。",
      "測試伺服器與雲端伺服器環境的佈署，調整組態和防火牆設定。",
      "維護和優化 Android App，新增功能、修改 UI 並修復 Bug。",
      "修改與維護伺服器端程式碼，整合系統（Servlet, ServerSocket, MySQL, JNI 等）。"
    ],
  },
  {
    title: "軟體工程師",
    company_name: "系微股份有限公司",
    icon: insyde,
    color: "#ffffff",
    date: "2013/5 - 2015/5",
    points: [
      "在 Android 平台上開發多視窗功能，重寫 Android 框架中的多個模組，包括 WindowManagerService、ActivityManagerService 等。",
      "改寫應用程序的生命週期，實現多視窗模式，並增加功能鍵與視窗化操作。",
      "針對聯想和宏碁的專案進行定制開發，提供滑鼠行為調整、模式切換、Mirror Mode 等功能。"
    ],
  },
  {
    title: "",
    company_name: "",
    icon: null,
    color: "",
    date: "",
    points: [],
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/",
  }
];

export { intro, services, technologies, experiences, projects };
