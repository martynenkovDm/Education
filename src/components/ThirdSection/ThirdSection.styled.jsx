import styled from 'styled-components';

export const SectionWrap = styled.section`
  padding-bottom: 128px;
`;
export const Container1 = styled.div`
  max-width: 1200px;
  padding: 0 32px;
`;

export const Title = styled.h2`
  margin-bottom: 91px;
  font-size: 24px;
`;
export const SubTitle = styled.h3`
  margin-top: 54px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: black;
`;
export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: center;
`;
export const ReviewsItem = styled.li`
  position: relative;
  width: 360px;
  height: 200px;
  background: white;
  border: 1px solid rgba(17, 17, 17, 0.1);
  box-shadow: 0px 9.04932px 26.5717px rgba(215, 228, 249, 0.25);
  border-radius: 15px;
`;
export const ReviewsImg = styled.img`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Text = styled.p`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  color: rgba(17, 17, 17, 0.7);
`;
