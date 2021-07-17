import { Box, Image, HStack, useColorMode } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";
import { useState } from "react";

const Photos = ({ images, ...restProps }) => {
  return (
    <HStack
      width="100vw"
      flexWrap="nowrap"
      className={styles.fullBleed}
      {...restProps}
    >
      <Box
        display="flex"
        alignItems="center"
        margin="0 auto"
        width="fit-content"
        overflowX="scroll"
        paddingY={4}
        sx={{
          scrollSnapType: "x",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images?.map((i) => {
          const [width, setWidth] = useState(false);
          const toggleWidth = () => { width ? setWidth(false) : setWidth(true) };
          const { colorMode } = useColorMode();
          return (
            <Box
              key={i.id}
              minWidth={!width && !i.landscape ? "240px" : width && i.landscape ? "820px" : "539px"}
              objectFit="contain"
              transition="all 250ms ease-in-out"
              cursor="pointer"
              marginRight={4}
              onClick={(i) => toggleWidth(i)}
              sx={{
                scrollSnapAlign: "inherit",
                background: "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "0 5px 12px rgb(0 0 0 / 30%)",
                backdropFilter: "blur(0.5px)",
                borderRadius: "2px",
                border: "1px solid rgba( 255, 255, 255, 0.20 )",
              }}
              _hover={{
                backgroundColor:
                  colorMode === "dark"
                    ? "rgba(245, 245, 245, 1)"
                    : "rgba(13, 16, 19, 1)",
              }}
              className={`${styles.marginHandle} link`}
            >
              <Image src={i.src} alt={i.alt} />
            </Box>
          );
        })}
      </Box>
    </HStack>
  );
};

export default Photos;