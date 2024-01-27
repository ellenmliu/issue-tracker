import { Card, Flex, Text } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  count:
    {
      open: number;
      inProgress: number;
      closed: number;
    }
}

const IssuesSummary = ({ count }: Props) => {
  const cards: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: count.open, status: "OPEN" },
    { label: "In-progress Issues", value: count.inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: count.closed, status: "CLOSED" },
  ]

  return (
    <Flex gap="4">
      {cards.map(card => (
        <Card key={card.label}>
          <Flex direction="column" gap="1">
            <Link className="text-sm font-medium"
                  href={`/issues?status=${card.status}`}>{card.label}</Link>
            <Text size="5" className="font-bold">{card.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}

export default IssuesSummary