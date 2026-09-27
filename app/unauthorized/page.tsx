import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import GoBackButton from "../auth/_components/GoBackButton";

export default function UnauthorizedPage() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="60vh"
      gap="4"
    >
      <Card size="3">
        <Flex direction="column" align="center" gap="3">
          <Heading>Access Denied</Heading>

          <Text color="gray">
            You do not have permission to access this page.
          </Text>

          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <GoBackButton />
        </Flex>
      </Card>
    </Flex>
  );
}
