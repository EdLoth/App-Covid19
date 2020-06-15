import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #333;
  justify-content: space-between;
  padding: 5px 10px 0 10px;
  width: 100%;
`;
export const TextHeader = styled.Text`
  margin-left: 80px;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;
export const StatusBar = styled.StatusBar``;
export const CalloutContent = styled.View`
  width: 250px;
  justify-content: center;
`;
export const CalloutText = styled.Text`
  color: #666;
  font-weight: bold;
`;
export const ImageHeader = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;
export const ImageMarker = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;
