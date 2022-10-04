import { Spin } from "antd";

import Flex from "./Flex";

export const Loading = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <Spin size="large" spinning />
    </Flex>
  );
};
