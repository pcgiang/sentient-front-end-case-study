import * as React from 'react';
import { Card } from '@mui/material';
import PromotionPage from './PromotionEngine';
import Features from './Features';
import API from './API';
import Demo from './Demo';
import Customer from './Customer';
import MyAppBar from '../../components/AppBar';

export default function LandingPage() {
  return (
    <Card>
      <MyAppBar/>
      <PromotionPage/>
      <Features/>   
      <API/>
      <Demo/>
      <Customer/>
    </Card>
  );
}