import { motion } from 'framer-motion';
import {
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiPulseLine,
  RiLeafLine,
  RiLineChartLine,
  RiCompassLine
} from 'react-icons/ri';

import mbaJourneyImg from '../assets/mba_journey.webp';
import corporateLearningImg from '../assets/corporate_learning.webp';
import aboutImg from '../assets/about.webp';
import beyondboundImg from '../assets/beyondbound.webp';
import glycomicsImg from '../assets/glycomics.webp';
import visionImg from '../assets/vision.webp';

export default function JourneyFrames() {
  const cards = [
    {
      title: 'MBA Foundation',
      metric: 'K J Somaiya — Healthcare Strategy',
      caption: 'I entered management studies to understand how systems scale. It taught me the frameworks of commercial strategy, but more importantly, it helped me understand how people make decisions about their health.',
      icon: RiGraduationCapLine,
      gradient: 'from-sage/60 via-sage to-accent/10',
      image: mbaJourneyImg
    },
    {
      title: 'Corporate Execution',
      metric: 'Patanjali • Britannia • Allied Research',
      caption: 'My time in sales and research operations was an intensive lesson in scale. I spearheaded distribution channels and analyzed pharma pipeline data, learning that strategy is meaningless without action.',
      icon: RiBriefcaseLine,
      gradient: 'from-sage via-white to-accent/20',
      image: corporateLearningImg
    },
    {
      title: 'The Market Gap',
      metric: "The problem wasn't a lack of products. It was a lack of clarity.",
      caption: 'Reviewing market data and speaking to consumers showed me that wellness brands were trying to solve everything. Few focused deeply on metabolism. People were left overwhelmed by conflicting advice, with no trusted destination for metabolic health.',
      icon: RiPulseLine,
      gradient: 'from-teal/5 via-sage/40 to-accent/10',
      image: aboutImg
    },
    {
      title: 'Building Beyond Bound®',
      metric: 'Testing Assumptions First',
      caption: "I launched my nutraceutical venture to bridge this gap. To test my assumptions, I spent months wearing a continuous glucose monitor, tracking my own metabolic responses and learning directly from the data. If I could not verify a formulation's impact on myself, I would never ask anyone else to trust it.",
      icon: RiLeafLine,
      gradient: 'from-sage/20 via-accent/5 to-teal/10',
      image: beyondboundImg
    },
    {
      title: 'Venture Growth',
      metric: 'FROM THESIS TO FORMULATION',
      caption: 'I chose depth over breadth. Rather than building another generic wellness brand, I focused Beyond Bound entirely on metabolic health. That focus led to Glycomics™, our first formulation. Before asking anyone else to trust it, I spent months studying my own metabolic responses through continuous glucose monitoring. The lesson was simple: trust should be built on evidence, not promises.',
      icon: RiLineChartLine,
      gradient: 'from-teal/10 via-sage to-accent/5',
      image: glycomicsImg
    },
    {
      title: 'Future Vision',
      metric: 'Trust Before Marketing',
      caption: "My goal isn't to build another supplement company. I want Beyond Bound to become a health brand where trust comes before marketing, evidence comes before claims, and that people can turn to for absolute clarity about their metabolic health.",
      icon: RiCompassLine,
      gradient: 'from-sage/40 via-accent/10 to-teal/20',
      image: visionImg
    }
  ];

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const slideInRight = {
import {
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiPulseLine,
  RiLeafLine,
  RiLineChartLine,
  RiCompassLine
} from 'react-icons/ri';


import mbaJourneyImg from '../assets/mba_journey.webp';
import corporateLearningImg from '../assets/corporate_learning.webp';
import aboutImg from '../assets/about.webp';
import beyondboundImg from '../assets/beyondbound.webp';
import glycomicsImg from '../assets/glycomics.webp';
import visionImg from '../assets/vision.webp';


export default function JourneyFrames() {
  const cards = [
    {
      title: 'MBA Foundation',
      metric: 'K J Somaiya — Healthcare Strategy',
      caption: 'I entered management studies to understand how systems scale. It taught me the frameworks of commercial strategy, but more importantly, it helped me understand how people make decisions about their health.',
      icon: RiGraduationCapLine,
      gradient: 'from-sage/60 via-sage to-accent/10',
      image: mbaJourneyImg
    },
    {
      title: 'Corporate Execution',
      metric: 'Patanjali • Britannia • Allied Research',
      caption: 'My time in sales and research operations was an intensive lesson in scale. I spearheaded distribution channels and analyzed pharma pipeline data, learning that strategy is meaningless without action.',
      icon: RiBriefcaseLine,
      gradient: 'from-sage via-white to-accent/20',
      image: corporateLearningImg
    },
    {
      title: 'The Market Gap',
      metric: "The problem wasn't a lack of products. It was a lack of clarity.",
      caption: 'Reviewing market data and speaking to consumers showed me that wellness brands were trying to solve everything. Few focused deeply on metabolism. People were left overwhelmed by conflicting advice, with no trusted destination for metabolic health.',
      icon: RiPulseLine,
      gradient: 'from-teal/5 via-sage/40 to-accent/10',
      image: aboutImg
    },
    {
      title: 'Building Beyond Bound®',
      metric: 'Testing Assumptions First',
      caption: "I launched my nutraceutical venture to bridge this gap. To test my assumptions, I spent months wearing a continuous glucose monitor, tracking my own metabolic responses and learning directly from the data. If I could not verify a formulation's impact on myself, I would never ask anyone else to trust it.",
      icon: RiLeafLine,
      gradient: 'from-sage/20 via-accent/5 to-teal/10',
      image: beyondboundImg
    },
    {
      title: 'Venture Growth',
      metric: 'FROM THESIS TO FORMULATION',
      caption: 'I chose depth over breadth. Rather than building another generic wellness brand, I focused Beyond Bound entirely on metabolic health. That focus led to Glycomics™, our first weight management formula. The lesson was simple: trust should be built on evidence, not promises.',
      icon: RiLineChartLine,
      gradient: 'from-teal/10 via-sage to-accent/5',
      image: glycomicsImg
    },
    {
      title: 'Future Vision',
      metric: 'Trust Before Marketing',
      caption: "My goal isn't to build another supplement company. I want Beyond Bound to become a health brand where trust comes before marketing, evidence comes before claims, and that people can turn to for absolute clarity about their metabolic health.",
      icon: RiCompassLine,
      gradient: 'from-sage/40 via-accent/10 to-teal/20',
      image: visionImg
    }
  ];

  const slideInLeft = {
