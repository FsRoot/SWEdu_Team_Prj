import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import kaleImage from '../images/kaleImage.jpg';
import lettuceImage from '../images/lettuceImage.jpg';
import chardImage from '../images/chardImage.jpg';
import mustardGreensImage from '../images/mustardGreensImage.jpg';

// 채소 데이터 배열
const vegetables = [
  { name: '케일', src: kaleImage, path: '/vegetable/kale' },
  { name: '상추', src: lettuceImage, path: '/vegetable/Lettuce' },
  { name: '근대', src: chardImage, path: '/vegetable/Chard' },
  { name: '겨자채', src: mustardGreensImage, path: '/vegetable/MustardGreens' },
  
];

// 컴포넌트 스타일
const imgStyle = {
  width: '100%', // 카드의 너비에 맞추기
  height: '150px', // 높이를 고정하여 일관된 크기 확보
  objectFit: 'cover', // 이미지가 공간을 채우도록 조절
  borderRadius: '50%',
  display: 'block',
  margin: 'auto',
};


function VegetableGallery() {
  return (
    <Container >
      <h1>이달의 상품 목록</h1>
      <Row>
        {vegetables.map((veg, index) => (
          <Col key={index} xs={6} md={6} lg={3} className="text-center">
            <Card >
              <Card.Img variant="top" src={veg.src} style={imgStyle} alt={veg.name} />
              <Card.Body >
                <Card.Title >
                  <Link to={veg.path} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {veg.name}
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VegetableGallery;

