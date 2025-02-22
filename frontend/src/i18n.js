import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to Kisan Helper': 'Welcome to Kisan Helper',
      'Empowering farmers through technology': 'Empowering farmers through technology',
      'Home': 'Home',
      'Market Prices': 'Market Prices',
      'Weather': 'Weather',
      'Forum': 'Forum',
      'Expert Consultation': 'Expert Consultation',
      'Schemes': 'Schemes',
      'Marketplace': 'Marketplace',
      'Learning Hub': 'Learning Hub',
      'Contact': 'Contact',
      'Wind Speed': 'Wind Speed',
      'Humidity': 'Humidity',
      'Farming Recommendations': 'Farming Recommendations',
      '5-Day Forecast': '5-Day Forecast',
      'Rain': 'Rain',
      'Location access denied': 'Location access denied. Please enable location services.',
      'Failed to fetch weather data': 'Failed to fetch weather data',
      'Search crops...': 'Search crops...',
      'All Categories': 'All Categories',
      'Cereals': 'Cereals',
      'Pulses': 'Pulses',
      'Vegetables': 'Vegetables',
      'Fruits': 'Fruits',
      'Oilseeds': 'Oilseeds',
      'Market': 'Market',
      'Last Updated': 'Last Updated',
      'No matching crops found': 'No matching crops found',
      'Failed to fetch market prices': 'Failed to fetch market prices',
      'Search by name or specialization...': 'Search by name or specialization...',
      'All Specializations': 'All Specializations',
      'Soil Health': 'Soil Health',
      'Crop Management': 'Crop Management',
      'Pest Control': 'Pest Control',
      'Irrigation': 'Irrigation',
      'Organic Farming': 'Organic Farming',
      'reviews': 'reviews',
      'Available': 'Available',
      'Languages': 'Languages',
      'Video Call': 'Video Call',
      'Voice Call': 'Voice Call',
      'No experts found matching your criteria': 'No experts found matching your criteria',
      'Failed to fetch experts': 'Failed to fetch experts',
      'Government Schemes': 'Government Schemes',
      'Search schemes...': 'Search schemes...',
      'Financial Support': 'Financial Support',
      'Insurance': 'Insurance',
      'Subsidies': 'Subsidies',
      'Training & Development': 'Training & Development',
      'Infrastructure': 'Infrastructure',
      'Key Benefits': 'Key Benefits',
      'Last Date': 'Last Date',
      'Maximum Funding': 'Maximum Funding',
      'Apply Now': 'Apply Now',
      'No schemes found matching your criteria': 'No schemes found matching your criteria',
      'Failed to fetch schemes': 'Failed to fetch schemes',
      'Search products...': 'Search products...',
      'All Types': 'All Types',
      'For Sale': 'For Sale',
      'For Rent': 'For Rent',
      'Equipment': 'Equipment',
      'Seeds': 'Seeds',
      'Fertilizers': 'Fertilizers',
      'Pesticides': 'Pesticides',
      'Farm Produce': 'Farm Produce',
      'Buy Now': 'Buy Now',
      'Rent Now': 'Rent Now',
      'No products found matching your criteria': 'No products found matching your criteria',
      'Failed to fetch products': 'Failed to fetch products',
      'Search resources...': 'Search resources...',
      'Videos': 'Videos',
      'Articles': 'Articles',
      'Courses': 'Courses',
      'All Topics': 'All Topics',
      'Modern Technology': 'Modern Technology',
      'Farm Management': 'Farm Management',
      'learners': 'learners',
      'Start Learning': 'Start Learning',
      'No resources found matching your criteria': 'No resources found matching your criteria',
      'Failed to fetch learning resources': 'Failed to fetch learning resources',
      'Empowering Farmers': 'Empowering Farmers',
      'Through Technology': 'Through Technology',
      'Access modern farming solutions, market insights, and expert guidance all in one place': 'Access modern farming solutions, market insights, and expert guidance all in one place',
      'Get Started': 'Get Started',
      'Contact Us': 'Contact Us',
      'Key Features': 'Key Features',
      'Everything you need to manage your farming activities efficiently': 'Everything you need to manage your farming activities efficiently',
      'Our Services': 'Our Services',
      'Comprehensive solutions for modern farming': 'Comprehensive solutions for modern farming',
      'Ready to get started?': 'Ready to get started?',
      'Join our farming community today.': 'Join our farming community today.',
      'Get real-time weather forecasts and farming recommendations': 'Get real-time weather forecasts and farming recommendations',
      'Stay updated with latest agricultural commodity prices': 'Stay updated with latest agricultural commodity prices',
      'Connect with agricultural experts for guidance': 'Connect with agricultural experts for guidance',
      'Access educational content and farming techniques': 'Access educational content and farming techniques',
      'Buy and sell agricultural products and equipment': 'Buy and sell agricultural products and equipment',
      'Information about agricultural schemes and benefits': 'Information about agricultural schemes and benefits',
      'Detailed market trends and price analysis': 'Detailed market trends and price analysis',
      'Round-the-clock assistance for farmers': 'Round-the-clock assistance for farmers',
      'Why Choose Kisan Helper?': 'Why Choose Kisan Helper?',
      'Comprehensive farming solutions at your fingertips': 'Comprehensive farming solutions at your fingertips',
      'What Farmers Say': 'What Farmers Say',
      'Get the Kisan Helper App': 'Get the Kisan Helper App',
      'Access all features on the go with our mobile app': 'Access all features on the go with our mobile app',
      'Active Farmers': 'Active Farmers',
      'Expert Consultants': 'Expert Consultants',
      'Daily Market Updates': 'Daily Market Updates',
      'Support Available': 'Support Available',
      'Real-time weather alerts and forecasts': 'Real-time weather alerts and forecasts',
      'Direct connection with agricultural experts': 'Direct connection with agricultural experts',
      'Latest market prices and trends': 'Latest market prices and trends',
      'Access to government schemes and subsidies': 'Access to government schemes and subsidies',
      'Educational resources and training materials': 'Educational resources and training materials',
      'Community forum for knowledge sharing': 'Community forum for knowledge sharing'
    }
  },
  hi: {
    translation: {
      'Welcome to Kisan Helper': 'किसान हेल्पर में आपका स्वागत है',
      'Empowering farmers through technology': 'प्रौद्योगिकी के माध्यम से किसानों को सशक्त बनाना',
      'Home': 'होम',
      'Market Prices': 'बाजार भाव',
      'Weather': 'मौसम',
      'Forum': 'चर्चा मंच',
      'Expert Consultation': 'विशेषज्ञ परामर्श',
      'Schemes': 'योजनाएं',
      'Marketplace': 'बाज़ार',
      'Learning Hub': 'शिक्षण केंद्र',
      'Contact': 'संपर्क',
      'Wind Speed': 'हवा की गति',
      'Humidity': 'नमी',
      'Farming Recommendations': 'कृषि सिफारिशें',
      '5-Day Forecast': '5-दिन का पूर्वानुमान',
      'Rain': 'बारिश',
      'Location access denied': 'स्थान की पहुंच अस्वीकृत। कृपया लोकेशन सेवाएं सक्षम करें।',
      'Failed to fetch weather data': 'मौसम डेटा प्राप्त करने में विफल',
      'Search crops...': 'फसलें खोजें...',
      'All Categories': 'सभी श्रेणियां',
      'Cereals': 'अनाज',
      'Pulses': 'दालें',
      'Vegetables': 'सब्जियां',
      'Fruits': 'फल',
      'Oilseeds': 'तिलहन',
      'Market': 'मंडी',
      'Last Updated': 'अंतिम अपडेट',
      'No matching crops found': 'कोई मिलती-जुलती फसल नहीं मिली',
      'Failed to fetch market prices': 'बाजार मूल्य प्राप्त करने में विफल',
      'Search by name or specialization...': 'नाम या विशेषज्ञता से खोजें...',
      'All Specializations': 'सभी विशेषज्ञताएं',
      'Soil Health': 'मिट्टी स्वास्थ्य',
      'Crop Management': 'फसल प्रबंधन',
      'Pest Control': 'कीट नियंत्रण',
      'Irrigation': 'सिंचाई',
      'Organic Farming': 'जैविक खेती',
      'reviews': 'समीक्षाएं',
      'Available': 'उपलब्ध',
      'Languages': 'भाषाएं',
      'Video Call': 'वीडियो कॉल',
      'Voice Call': 'वॉइस कॉल',
      'No experts found matching your criteria': 'आपके मानदंडों से मेल खाने वाले कोई विशेषज्ञ नहीं मिले',
      'Failed to fetch experts': 'विशेषज्ञों की जानकारी प्राप्त करने में विफल',
      'Government Schemes': 'सरकारी योजनाएं',
      'Search schemes...': 'योजनाएं खोजें...',
      'Financial Support': 'वित्तीय सहायता',
      'Insurance': 'बीमा',
      'Subsidies': 'सब्सिडी',
      'Training & Development': 'प्रशिक्षण और विकास',
      'Infrastructure': 'बुनियादी ढांचा',
      'Key Benefits': 'प्रमुख लाभ',
      'Last Date': 'अंतिम तिथि',
      'Maximum Funding': 'अधिकतम वित्त पोषण',
      'Apply Now': 'अभी आवेदन करें',
      'No schemes found matching your criteria': 'आपके मानदंडों से मेल खाती कोई योजना नहीं मिली',
      'Failed to fetch schemes': 'योजनाएं प्राप्त करने में विफल',
      'Search products...': 'उत्पाद खोजें...',
      'All Types': 'सभी प्रकार',
      'For Sale': 'बिक्री के लिए',
      'For Rent': 'किराये के लिए',
      'Equipment': 'उपकरण',
      'Seeds': 'बीज',
      'Fertilizers': 'उर्वरक',
      'Pesticides': 'कीटनाशक',
      'Farm Produce': 'कृषि उत्पाद',
      'Buy Now': 'अभी खरीदें',
      'Rent Now': 'अभी किराए पर लें',
      'No products found matching your criteria': 'आपके मानदंडों से मेल खाते कोई उत्पाद नहीं मिले',
      'Failed to fetch products': 'उत्पाद प्राप्त करने में विफल',
      'Search resources...': 'संसाधन खोजें...',
      'Videos': 'वीडियो',
      'Articles': 'लेख',
      'Courses': 'पाठ्यक्रम',
      'All Topics': 'सभी विषय',
      'Modern Technology': 'आधुनिक तकनीक',
      'Farm Management': 'कृषि प्रबंधन',
      'learners': 'शिक्षार्थी',
      'Start Learning': 'सीखना शुरू करें',
      'No resources found matching your criteria': 'आपके मानदंडों से मेल खाते कोई संसाधन नहीं मिले',
      'Failed to fetch learning resources': 'शिक्षण संसाधन प्राप्त करने में विफल',
      'Empowering Farmers': 'किसानों को सशक्त बनाना',
      'Through Technology': 'तकनीक के माध्यम से',
      'Access modern farming solutions, market insights, and expert guidance all in one place': 'आधुनिक कृषि समाधान, बाजार जानकारी और विशेषज्ञ मार्गदर्शन एक ही स्थान पर प्राप्त करें',
      'Get Started': 'शुरू करें',
      'Contact Us': 'संपर्क करें',
      'Key Features': 'मुख्य विशेषताएं',
      'Everything you need to manage your farming activities efficiently': 'आपकी कृषि गतिविधियों को कुशलतापूर्वक प्रबंधित करने के लिए सब कुछ',
      'Our Services': 'हमारी सेवाएं',
      'Comprehensive solutions for modern farming': 'आधुनिक खेती के लिए व्यापक समाधान',
      'Ready to get started?': 'शुरू करने के लिए तैयार हैं?',
      'Join our farming community today.': 'आज ही हमारी कृषि समुदाय से जुड़ें।',
      'Get real-time weather forecasts and farming recommendations': 'वास्तविक समय के मौसम पूर्वानुमान और कृषि सिफारिशें प्राप्त करें',
      'Stay updated with latest agricultural commodity prices': 'कृषि वस्तुओं की नवीनतम कीमतों से अपडेट रहें',
      'Connect with agricultural experts for guidance': 'मार्गदर्शन के लिए कृषि विशेषज्ञों से जुड़ें',
      'Access educational content and farming techniques': 'शैक्षिक सामग्री और कृषि तकनीकों तक पहुंच',
      'Buy and sell agricultural products and equipment': 'कृषि उत्पादों और उपकरणों की खरीद और बिक्री',
      'Information about agricultural schemes and benefits': 'कृषि योजनाओं और लाभों के बारे में जानकारी',
      'Detailed market trends and price analysis': 'विस्तृत बाजार रुझान और मूल्य विश्लेषण',
      'Round-the-clock assistance for farmers': 'किसानों के लिए चौबीसों घंटे सहायता',
      'Why Choose Kisan Helper?': 'क्यों Kisan Helper चुनें?',
      'Comprehensive farming solutions at your fingertips': 'कृषि समाधान आपके हथियार पर हैं',
      'What Farmers Say': 'किसान क्या कहते हैं',
      'Get the Kisan Helper App': 'Kisan Helper ऐप प्राप्त करें',
      'Access all features on the go with our mobile app': 'ऐप के साथ सभी सुविधाएं जल्द ही प्राप्त करें',
      'Active Farmers': 'सक्रिय किसान',
      'Expert Consultants': 'विशेषज्ञ सलाहकार',
      'Daily Market Updates': 'दैनिक बाजार अपडेट',
      'Support Available': 'समर्थन उपलब्ध',
      'Real-time weather alerts and forecasts': 'वास्तविक समय के मौसम पूर्वानुमान',
      'Direct connection with agricultural experts': 'कृषि विशेषज्ञों के सीधे संबंध',
      'Latest market prices and trends': 'नवीनतम बाजार मूल्य और रुझान',
      'Access to government schemes and subsidies': 'सरकारी योजनाओं और सब्सिडी तक पहुंच',
      'Educational resources and training materials': 'शैक्षिक सामग्री और प्रशिक्षण सामग्री',
      'Community forum for knowledge sharing': 'ज्ञान साझा करने के लिए समुदाय फोरम'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 