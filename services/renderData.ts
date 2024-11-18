import {
  aboutUsIcon,
  callIcon,
  darkModeIcon,
  doubleSaveIcon,
  FAQsIcon,
  followFaceIcon,
  inforIcon,
  noiceIcon,
  notiIcon,
  RateIcon,
} from '../assets/svgXml';
import {vw} from './styleSheets';

export const DiseaseCategoriesTabs = [
  {
    img: require('../assets/home/stomach.png'),
    label: 'Stomach',
  },
  {
    img: require('../assets/home/heart.png'),
    label: 'Heart',
  },
  {
    img: require('../assets/home/brain.png'),
    label: 'Brain',
  },
  {
    img: require('../assets/home/earsGroup.png'),
    label: 'Ears, nose, throat',
  },
  {
    img: require('../assets/home/lungs.png'),
    label: 'Lungs',
  },
  {
    img: require('../assets/home/arm.png'),
    label: 'Arms',
  },
];

export const HomeLearnMoreData = [
  {
    disease: 'Irritable Bowel Syndrome (IBS)',
    img: require('../assets/home/stomach.png'),
    description:
      'Irritable Bowel Syndrome is a gastrointestinal disorder that causes abdominal pain, bloating, and changes in bowel habits, such as diarrhea or constipation. It impacts the function of the digestive system without causing structural damage.',
    thingsToDo:
      'Eat small, frequent meals, follow a low-FODMAP diet, and manage stress levels.',
    thingsNotToDo: 'Consume fatty, fried foods, overeat, or neglect hydration.',
    excercise: [
      {
        title: 'Walking',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '20–30 minutes daily at a moderate pace.',
        description:
          'Walking stimulates the digestive system, improves bowel regularity, and reduces stress, which is a major trigger for IBS symptoms',
      },
      {
        title: 'Yoga',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Yoga helps reduce stress and tension in the body, which can worsen IBS symptoms. It also promotes gentle movement of the intestines, easing bloating and discomfort.',
      },
      {
        title: 'Deep Breathing Exercises',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: '5–10 minutes daily',
        description:
          'Deep breathing reduces stress, calms the nervous system, and alleviates IBS symptoms by improving oxygen flow to the digestive tract. It promotes relaxation and reduces tension in the abdomen',
      },
    ],
    foodsToEat: [
      {
        title: 'Low-FODMAP Fruits',
        subTitle: '1–2 servings daily',
        value: 'Rich in fiber, antioxidants, and vitamins C and B6.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Low-FODMAP fruits help reduce bloating and gas while providing essential nutrients for gut health. They are easily digestible and reduce IBS symptoms.',
      },
      {
        title: 'Oats',
        subTitle: '1/2–1 cup daily',
        value: 'High in soluble fiber (beta-glucan), protein, and magnesium',
        img: require('../assets/home/food/oats.png'),
        description:
          'Oats are gentle on the digestive system and help regulate bowel movements, reduce inflammation, and improve digestion by balancing gut bacteria',
      },
      {
        title: 'Lean Proteins (Chicken, Fish)',
        subTitle: '100–150g/meal, 2–3 times/day',
        value: 'High in protein and low in fat',
        img: require('../assets/home/food/meat.png'),
        description:
          'Lean proteins are easily digestible and help prevent IBS flare-ups. They provide essential amino acids for tissue repair and support gut health without causing irritation',
      },
    ],
  },
  {
    disease: 'COVID-19',
    img: require('../assets/home/lungs.png'),
    description:
      'COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It can cause mild to severe symptoms, including fever, cough, and difficulty breathing.',
    thingsToDo:
      'Practice social distancing, wear masks, wash hands frequently, and get vaccinated.',
    thingsNotToDo:
      'Avoid large gatherings, neglect hygiene, or ignore symptoms.',
    excercise: [
      {
        title: 'Breathing Exercises',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: '10–15 minutes daily',
        description:
          'Breathing exercises can help improve lung function and reduce stress, which is beneficial for recovery from respiratory illnesses.',
      },
      {
        title: 'Light Aerobic Exercise',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Light aerobic exercises like walking or cycling can help maintain overall health and improve immune function.',
      },
      {
        title: 'Strength Training',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '2–3 times a week',
        description:
          'Strength training helps maintain muscle mass and overall strength, which is important during recovery.',
      },
    ],
    foodsToEat: [
      {
        title: 'Vitamin C Rich Foods',
        subTitle: '1–2 servings daily',
        value: 'Boosts immune function and reduces inflammation.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Foods rich in vitamin C, such as oranges and strawberries, help boost the immune system and reduce inflammation.',
      },
      {
        title: 'Protein-Rich Foods',
        subTitle: '2–3 servings daily',
        value: 'Supports muscle repair and immune function.',
        img: require('../assets/home/food/meat.png'),
        description:
          'Protein-rich foods like chicken, fish, and legumes support muscle repair and immune function.',
      },
      {
        title: 'Hydrating Foods',
        subTitle: 'Multiple servings daily',
        value: 'Maintains hydration and supports overall health.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Hydrating foods like cucumbers and watermelon help maintain hydration and support overall health.',
      },
    ],
  },
  {
    disease: "Alzheimer's Disease",
    img: require('../assets/home/brain.png'),
    description:
      "Alzheimer's Disease is a progressive neurological disorder that causes memory loss, cognitive decline, and behavioral changes.",
    thingsToDo:
      'Engage in regular mental and physical exercise, maintain a healthy diet, and stay socially active.',
    thingsNotToDo:
      'Avoid isolation, neglect mental health, or consume unhealthy foods.',
    excercise: [
      {
        title: 'Brain Games',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: 'Daily',
        description:
          'Brain games like puzzles and memory exercises help keep the mind active and may slow cognitive decline.',
      },
      {
        title: 'Walking',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Walking improves cardiovascular health and can help reduce the risk of cognitive decline.',
      },
      {
        title: 'Social Activities',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: 'Regularly',
        description:
          'Engaging in social activities helps maintain mental health and can reduce the risk of cognitive decline.',
      },
    ],
    foodsToEat: [
      {
        title: 'Leafy Greens',
        subTitle: '1–2 servings daily',
        value: 'Rich in vitamins and antioxidants.',
        img: require('../assets/home/food/vergetable.png'),
        description:
          'Leafy greens like spinach and kale are rich in vitamins and antioxidants that support brain health.',
      },
      {
        title: 'Omega-3 Rich Foods',
        subTitle: '2–3 servings weekly',
        value: 'Supports brain function and reduces inflammation.',
        img: require('../assets/home/food/oats.png'),
        description:
          'Foods rich in omega-3 fatty acids, such as salmon and flaxseeds, support brain function and reduce inflammation.',
      },
      {
        title: 'Berries',
        subTitle: '1–2 servings daily',
        value: 'High in antioxidants and vitamins.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Berries are high in antioxidants and vitamins that support brain health and may reduce the risk of cognitive decline.',
      },
    ],
  },
  {
    disease: 'Arthritis',
    img: require('../assets/home/bone.png'),
    description:
      'Arthritis is a condition that causes inflammation and pain in the joints. It can affect people of all ages and can lead to decreased mobility.',
    thingsToDo:
      'Engage in regular low-impact exercise, maintain a healthy weight, and use joint protection techniques.',
    thingsNotToDo:
      'Avoid high-impact activities, neglect joint health, or consume inflammatory foods.',
    excercise: [
      {
        title: 'Swimming',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '30 minutes, 3 times a week',
        description:
          'Swimming is a low-impact exercise that helps improve joint mobility and reduce pain.',
      },
      {
        title: 'Tai Chi',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Tai Chi is a gentle exercise that improves balance, flexibility, and joint health.',
      },
      {
        title: 'Strength Training',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: '2–3 times a week',
        description:
          'Strength training helps maintain muscle mass and support joint health.',
      },
    ],
    foodsToEat: [
      {
        title: 'Anti-Inflammatory Foods',
        subTitle: 'Daily',
        value: 'Reduces inflammation and supports joint health.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Anti-inflammatory foods like turmeric, ginger, and green tea help reduce inflammation and support joint health.',
      },
      {
        title: 'Calcium-Rich Foods',
        subTitle: '2–3 servings daily',
        value: 'Supports bone health.',
        img: require('../assets/home/food/milk.png'),
        description:
          'Calcium-rich foods like dairy products and leafy greens support bone health and reduce the risk of osteoporosis.',
      },
      {
        title: 'Omega-3 Rich Foods',
        subTitle: '2–3 servings weekly',
        value: 'Reduces inflammation and supports joint health.',
        img: require('../assets/home/food/meat.png'),
        description:
          'Foods rich in omega-3 fatty acids, such as salmon and flaxseeds, reduce inflammation and support joint health.',
      },
    ],
  },
  {
    disease: 'Peptic Ulcer Disease (PUD)',
    img: require('../assets/home/stomach.png'),
    description:
      'Peptic Ulcer Disease is a condition where open sores develop on the inner lining of the stomach or the upper part of the small intestine.',
    thingsToDo:
      'Eat small, frequent meals, avoid spicy foods, and manage stress levels.',
    thingsNotToDo: 'Avoid smoking, excessive alcohol consumption, and NSAIDs.',
    excercise: [
      {
        title: 'Walking',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Walking helps improve digestion and reduce stress, which can alleviate symptoms of PUD.',
      },
      {
        title: 'Yoga',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Yoga helps reduce stress and improve digestion, which can alleviate symptoms of PUD.',
      },
      {
        title: 'Deep Breathing Exercises',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: '5–10 minutes daily',
        description:
          'Deep breathing exercises help reduce stress and improve oxygen flow to the digestive tract, which can alleviate symptoms of PUD.',
      },
    ],
    foodsToEat: [
      {
        title: 'Probiotic-Rich Foods',
        subTitle: 'Daily',
        value: 'Supports gut health and reduces inflammation.',
        img: require('../assets/home/food/milk.png'),
        description:
          'Probiotic-rich foods like yogurt and kefir support gut health and reduce inflammation, which can help alleviate symptoms of PUD.',
      },
      {
        title: 'Fiber-Rich Foods',
        subTitle: 'Daily',
        value: 'Supports digestion and gut health.',
        img: require('../assets/home/food/vergetable.png'),
        description:
          'Fiber-rich foods like fruits, vegetables, and whole grains support digestion and gut health, which can help alleviate symptoms of PUD.',
      },
      {
        title: 'Lean Proteins',
        subTitle: '2–3 servings daily',
        value: 'Supports tissue repair and overall health.',
        img: require('../assets/home/food/meat.png'),
        description:
          'Lean proteins like chicken, fish, and legumes support tissue repair and overall health, which can help alleviate symptoms of PUD.',
      },
    ],
  },
];

export const getMonthYearHomeChart = (offset: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + offset);
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export function getWeekDays(
  selectedMonth: string,
): {dayOfWeek: string; date: string}[] {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  let result = [];

  if (selectedMonth === 'current') {
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayOfWeek = i === 0 ? 'Today' : daysOfWeek[date.getDay()];
      const formattedDate = date.getDate().toString().padStart(2, '0'); // Ensure two digits

      result.push({dayOfWeek, date: formattedDate});
    }
  } else {
    let monthOffset = 0;
    if (selectedMonth === 'previous1') {
      monthOffset = -1;
    } else if (selectedMonth === 'previous2') {
      monthOffset = -2;
    } else if (selectedMonth === 'previous3') {
      monthOffset = -3;
    }

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() + monthOffset,
      0,
    );
    const lastDayOfPreviousMonth = previousMonth.getDate();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(previousMonth);
      date.setDate(lastDayOfPreviousMonth - i);

      const dayOfWeek = daysOfWeek[date.getDay()];
      const formattedDate = date.getDate().toString().padStart(2, '0'); // Ensure two digits

      result.push({dayOfWeek, date: formattedDate});
    }
  }

  return result;
}

export const pastListTaskData = [
  {
    title: 'Walking',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/walking.png'),
    isCompleted: true,
  },
  {
    title: 'Low-FODMAP Fruits',
    description: '1–2 servings',
    img: require('../assets/home/food/fruit.png'),
    isCompleted: true,
  },
  {
    title: 'Yoga',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/yoga.png'),
    isCompleted: true,
  },
  {
    title: 'Oats',
    description: '1/2–1 cup',
    img: require('../assets/home/food/oats.png'),
    isCompleted: true,
  },
  {
    title: 'Deep Breathing',
    description: '5–10 minutes',
    img: require('../assets/home/excercise/deepBreathing.png'),
    isCompleted: true,
  },
  {
    title: 'Lean proteins',
    description: '100–150g/meal',
    img: require('../assets/home/food/meat.png'),
    isCompleted: true,
  },
];

export const currentListTaskData = [
  {
    title: 'Walking',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/walking.png'),
    isCompleted: false,
  },
  {
    title: 'Low-FODMAP Fruits',
    description: '1–2 servings',
    img: require('../assets/home/food/fruit.png'),
    isCompleted: false,
  },
  {
    title: 'Yoga',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/yoga.png'),
    isCompleted: false,
  },
  {
    title: 'Oats',
    description: '1/2–1 cup',
    img: require('../assets/home/food/oats.png'),
    isCompleted: false,
  },
  {
    title: 'Deep Breathing',
    description: '5–10 minutes',
    img: require('../assets/home/excercise/deepBreathing.png'),
    isCompleted: false,
  },
  {
    title: 'Lean proteins',
    description: '100–150g/meal',
    img: require('../assets/home/food/meat.png'),
    isCompleted: false,
  },
];

export const additionListTask = [
  {
    title: 'Tai Chi',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/deepBreathing.png'),
    isCompleted: false,
  },
  {
    title: 'Protein-Rich Foods',
    description: '1–2 servings',
    img: require('../assets/home/food/milk.png'),
    isCompleted: false,
  },
];

export const futureListTaskData = [
  {
    title: 'Walking',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/walking.png'),
    isCompleted: false,
  },
  {
    title: 'Low-FODMAP Fruits',
    description: '1–2 servings',
    img: require('../assets/home/food/fruit.png'),
    isCompleted: false,
  },
  {
    title: 'Yoga',
    description: '20–30 minutes',
    img: require('../assets/home/excercise/yoga.png'),
    isCompleted: false,
  },
  {
    title: 'Oats',
    description: '1/2–1 cup',
    img: require('../assets/home/food/oats.png'),
    isCompleted: false,
  },
  {
    title: 'Deep Breathing',
    description: '5–10 minutes',
    img: require('../assets/home/excercise/deepBreathing.png'),
    isCompleted: false,
  },
  {
    title: 'Lean proteins',
    description: '100–150g/meal',
    img: require('../assets/home/food/meat.png'),
    isCompleted: false,
  },
];

export function getCurrentMonthAndDate(): string {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const date = today.getDate().toString().padStart(2, '0');
  return `${month}${date}`;
}

export function getCurrentDayOfWeekAndDate(): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const dayOfWeek = daysOfWeek[today.getDay()];
  const month = (today.getMonth() + 1).toString(); // Months are zero-based
  const date = today.getDate().toString();

  return `${dayOfWeek}, ${month}/${date}`;
}

export const NewsListData = [
  {
    title: 'Prevention and Treatment of Depression',
    post: '2 days ago',
    description:
      'Depression is a common psychological disorder that affects emotions, thoughts, and behaviors. To prevent and treat depression, consider the following steps.',
    img: require('../assets/news/news3.png'),
    prevention: [
      'Maintain a healthy lifestyle by eating a balanced diet, exercising regularly, and getting enough sleep.',
      'Manage stress: Learn to cope with stress through relaxation activities, meditation, or yoga.',
      'Build a support network: Stay connected with family, friends, and the community for emotional support.',
    ],
    treatment: [
      'Psychotherapy: Talk therapy can help you understand and manage your emotions and behaviors.',
      'Pharmacotherapy: Antidepressants may be prescribed by a doctor to manage symptoms.',
      'Continuous monitoring and support: Adhere to treatment and ensure ongoing support from family and healthcare providers.',
    ],
    isFollowed: false,
  },
  {
    title: 'Prevention and Treatment of Insomnia',
    post: '5 days ago',
    description:
      'Insomnia is a sleep disorder that can affect your quality of life. To prevent and treat insomnia, consider the following steps.',
    img: require('../assets/news/news2.png'),
    prevention: [
      'Maintain a regular sleep schedule: Go to bed and wake up at the same time every day.',
      'Create a restful environment: Ensure your bedroom is quiet, dark, and cool.',
      'Avoid stimulants: Limit caffeine and nicotine intake, especially before bedtime.',
    ],
    treatment: [
      'Cognitive Behavioral Therapy for Insomnia (CBT-I): A structured program that helps you identify and replace thoughts and behaviors that cause or worsen sleep problems.',
      'Medications: Prescription sleep aids may be used for short-term treatment.',
      'Lifestyle changes: Incorporate relaxation techniques, such as deep breathing and progressive muscle relaxation, into your daily routine.',
    ],
    isFollowed: false,
  },
  {
    title: 'Prevention and Treatment of Measles',
    post: '1 week ago',
    description:
      'Measles is a highly contagious viral infection. To prevent and treat measles, consider the following steps.',
    img: require('../assets/news/news1.png'),
    prevention: [
      'Vaccination: Ensure you and your children receive the MMR (measles, mumps, rubella) vaccine.',
      'Avoid contact: Stay away from individuals who are infected with measles.',
      'Maintain good hygiene: Wash your hands frequently and avoid touching your face.',
    ],
    treatment: [
      'Rest and hydration: Get plenty of rest and drink fluids to stay hydrated.',
      'Fever management: Use fever reducers, such as acetaminophen or ibuprofen, as directed by a healthcare provider.',
      'Monitor for complications: Seek medical attention if you experience severe symptoms or complications, such as pneumonia or encephalitis.',
    ],
    isFollowed: false,
  },
  {
    title: 'Prevention and Treatment of Dengue Fever',
    post: '2 weeks ago',
    description:
      'Dengue fever is a mosquito-borne viral infection. To prevent and treat dengue fever, consider the following steps.',
    img: require('../assets/news/news4.png'),
    prevention: [
      'Avoid mosquito bites: Use insect repellent, wear long-sleeved clothing, and use mosquito nets.',
      'Eliminate mosquito breeding sites: Remove standing water from containers, such as flower pots and buckets.',
      'Stay informed: Be aware of dengue outbreaks in your area and take precautions.',
    ],
    treatment: [
      'Rest and hydration: Get plenty of rest and drink fluids to stay hydrated.',
      'Pain relief: Use pain relievers, such as acetaminophen, to manage symptoms. Avoid aspirin and nonsteroidal anti-inflammatory drugs (NSAIDs).',
      'Seek medical attention: If you experience severe symptoms, such as severe abdominal pain, persistent vomiting, or bleeding, seek medical care immediately.',
    ],
    isFollowed: false,
  },
];

export const UserInfor = {
  name: 'Nguyen Dinh Minh Anh',
  age: 18,
  weight: 52,
  height: 165,
};

export const Self = [
  {
    icon: inforIcon(vw(7), vw(7)),
    title: 'Account information',
  },
  {
    icon: doubleSaveIcon(vw(7), vw(7)),
    title: 'Save post',
  },
];

export const SystemSetting = [
  {
    icon: darkModeIcon(vw(7), vw(7)),
    title: 'Dark mode',
  },
  {
    icon: notiIcon(vw(7), vw(7)),
    title: 'Notification',
  },
  {
    icon: noiceIcon(vw(7), vw(7)),
    title: 'Sound',
  },
];

export const HelpCenter = [
  {
    icon: aboutUsIcon(vw(7), vw(7)),
    title: 'Who we are',
  },
  {
    icon: FAQsIcon(vw(7), vw(7)),
    title: 'FAQs',
  },
  {
    icon: callIcon(vw(7), vw(7)),
    title: 'Contact',
  },
];

export const OtherInfor = [
  {
    icon: followFaceIcon(vw(7), vw(7)),
    title: 'Follow us',
  },
  {
    icon: RateIcon(vw(7), vw(7)),
    title: 'Rate us',
  },
];
