import { Box, Image, HStack } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";

const Photos = ({ images }) => {
  return (
    <HStack
      mt={-8}
      mb={8}
      width="100vw"
      flexWrap="nowrap"
      className={styles.fullBleed}
    >
      <Box
        display="flex"
        margin="0 auto"
        width="fit-content"
        overflowX="scroll"
        paddingY={4}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images?.map((i) => {
          return (
            <Box
              key={i.id}
              minW="240px"
              objectFit="scale-down"
              marginRight={4}
              sx={{
                // scrollSnapAlign: "start end",
                background: "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "0 5px 12px rgb(0 0 0 / 20%)",
                backdropFilter: "blur(0.5px)",
                borderRadius: "2px",
                border: "1px solid rgba( 255, 255, 255, 0.20 )",
              }}
              className={styles.marginHandle}
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