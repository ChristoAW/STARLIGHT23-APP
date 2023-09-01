import { React, useState, useEffect } from 'react'
import { Flex, Box, Image, AspectRatio } from '@chakra-ui/react';
import TM from "@/asset/images/treasure/TM_120 kosong.png"
import AbyssOpen from "@/asset/images/treasure/Abyss Terbuka.png"
import AbyssClose from "@/asset/images/treasure/Abyss Tertutup.png"
import LabyrssOpen from "@/asset/images/treasure/Labyrss Terbuka.png"
import LabyrssClose from "@/asset/images/treasure/Labyrss Tertutup.png"
import ElysiumOpen from "@/asset/images/treasure/Elysium REV PSB 2.png"
import ElysiumClose from "@/asset/images/treasure/Elysium_(cangkang_tutup)_REV.png"


function tm() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (screenWidth >= 992) {
        // Large screen (md and above)
        return (
            <AspectRatio
                w="100%"
                h="100%"
                ratio={16 / 9}
                paddingBottom="16vh"
            >
                <Flex
                    h="100%"
                    position="relative"
                >
                    <Image
                        maxW="none"
                        w="100vw"
                        h="initial"
                        objectFit='cover'
                        src={TM.src}
                        alt=''
                    >
                    </Image>
                    <Box
                        position="absolute"
                        bottom="27vw"
                        left="16vw"
                    >
                        {/* <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={AbyssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w="18vw"
                            objectFit='cover'
                            src={AbyssClose.src}
                            alt=''
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom="19vw"
                        left="41vw"
                    >
                        {/* <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={LabyrssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w="18vw"
                            objectFit='cover'
                            src={LabyrssClose.src}
                            alt=''
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom="33vw"
                        left="65vw"
                    >
                        {/* <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={ElysiumOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w="18vw"
                            objectFit='cover'
                            src={ElysiumClose.src}
                            alt=''
                        />
                    </Box>
                </Flex>
            </AspectRatio>
        );
    } else if (screenWidth >= 768) {
        return (
            <AspectRatio
                w="100%"
                h="100%"
                ratio={16 / 9}
                paddingBottom="16vh"
            >
                <Flex
                    h="100%"
                    position="relative"
                >
                    <Image
                        maxW="none"
                        w="100vw"
                        h="initial"
                        objectFit='cover'
                        src={TM.src}
                        alt=''
                    >
                    </Image>
                    <Box
                        position="absolute"
                        bottom="33vw"
                        left="16vw"
                    >
                        {/* <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={AbyssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w="18vw"
                            objectFit='cover'
                            src={AbyssClose.src}
                            alt=''
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom="26vw"
                        left="43vw"
                    >
                        {/* <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={LabyrssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w="18vw"
                            objectFit='cover'
                            src={LabyrssClose.src}
                            alt=''
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom="39vw"
                        left="65vw"
                    >
                        <Image
                            boxSize="18vw"
                            objectFit='cover'
                            src={ElysiumOpen.src}
                            alt=''
                        />
                        {/* <Image
                            w="18vw"
                            objectFit='cover'
                            src={ElysiumClose.src}
                            alt=''
                        /> */}
                    </Box>
                </Flex>
            </AspectRatio>
        );
    } else {
        return (
            <AspectRatio
                w='100vh'
                h='100vh'
                ratio={16 / 9}
                marginTop="0"
                marginBottom="0"
            >
                <Flex
                    h="100%"
                    position="relative"
                    transform='rotate(90deg)'
                >
                    <Image
                        maxW="none"
                        w='100vh'
                        h='100vw'
                        objectFit='cover'
                        src={TM.src}
                        alt=''
                    >
                    </Image>
                    <Box
                        position="absolute"
                        bottom='44vh'
                        left='16vh'
                    >
                        {/* <Image
                            boxSize='35vw'
                            objectFit='cover'
                            src={AbyssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w='35vw'
                            objectFit='cover'
                            src={AbyssClose.src}
                            alt=''
                            marginTop="4vh"
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom='36vh'
                        left='42vh'
                    >
                        {/* <Image
                            boxSize='35vw'
                            objectFit='cover'
                            src={LabyrssOpen.src}
                            alt=''
                        /> */}
                        <Image
                            w='35vw'
                            objectFit='cover'
                            src={LabyrssClose.src}
                            alt=''
                            marginTop='6vh'
                        />
                    </Box>
                    <Box
                        position="absolute"
                        bottom='50vh'
                        right='18vh'
                    >
                        {/* <Image
                                boxSize="35vw"
                                objectFit='cover'
                                src={ElysiumOpen.src}
                                alt=''
                            /> */}
                        <Image
                            w='35vw'
                            objectFit='cover'
                            src={ElysiumClose.src}
                            alt=''
                            marginTop='8vh'
                        />
                    </Box>
                </Flex>
            </AspectRatio>
        );
    }
}

export default tm