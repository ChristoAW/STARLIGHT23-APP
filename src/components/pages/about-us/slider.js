import { Flex } from "@chakra-ui/layout";

const Slider = ({children, ...props}) => {
    return (
    <Flex {...props}>
        {children}
    </Flex>
    )
}

export default Slider;