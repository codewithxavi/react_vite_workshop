import { HiCalendar } from "react-icons/hi";
import { Box, Text, Spacer, Tag, Flex, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.200" p={4} m={4} borderRadius="lg">
      <Box display="flex">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Box>
      <Flex align="center">
        <Icon as={HiCalendar} color="gray" />
        <Text fontSize="sm" ml="1" color="gray.400">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button colorScheme="purple">More details</Button>
      </Link>
    </Box>
  );
}
