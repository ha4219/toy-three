import React from 'react';
import {Container, Typography} from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth='xl' sx={{bgcolor: 'secondary.dark', padding: 0}}>
      <Typography color={'white'} align='center'>
        회사 : (주)팔로미 | 주소 : (우)03176 서울시 종로구 경희궁1길 18 2F | 사업자등록번호 : 636 – 87 – 00912​
대표 : 임우리 | 고객지원 : 1670-9010 | FAX : 02-2088-1673 | EMAIL : insurance@bis.co.kr​
<br/>
© 2018 ㈜팔로미. All Rights Reserved.
      </Typography>
    </Container>
  );
}

export default Footer;