import { Box, SimpleGrid } from "@chakra-ui/react";

function Layout() {
  const items = new Array(12).fill(0).map((a, i) => i + 1);
  // [1,2,3,4,5,6,7,8,9,10,11,12]

  // console.log(items);

  return (
    <Box>
      {/* <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={2}>
        {items.map((item) => (
          <Box key={item}>{item}</Box>
        ))}
      </SimpleGrid> */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}
        spacing={2}
      >
        {items.map((item) => (
          <Box bg="tomato" height="80px" key={item}>
            {item}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Layout;
