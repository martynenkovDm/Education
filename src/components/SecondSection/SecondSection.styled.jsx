import styled from 'styled-components';

export const SectionWrap = styled.section`
  margin-top: 60px;
  background-color: #1e1823;
`;
export const Container1 = styled.div`
  padding: 50px;
`;
export const Advantageslist = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 70px;
  padding-right: 0;
  line-height: 1.22;
`;
export const AdvantagesItem = styled.li`
  width: calc((100% - 140px) / 3);
  position: relative;
  padding-right: 18px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;

    background-color: rgba(255, 255, 255, 0.5);
    width: 1px;
    height: 124px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h3`
  margin: 22px 0 18px 0;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;
