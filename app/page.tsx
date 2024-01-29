import LatestIssues from "@/app/LatestIssues";
import IssuesSummary from "@/app/IssuesSummary";
import prisma from "@/prisma/client";
import IssueChart from "@/app/IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import {Metadata} from "next";

export default async function Home() {
  const openCount = await prisma.issue.count({ where: { status: "OPEN" }});
  const inProgressCount = await prisma.issue.count({ where: { status: "IN_PROGRESS" }});
  const closedCount = await prisma.issue.count({ where: { status: "CLOSED" }});

  const count = {
    open: openCount,
    inProgress: inProgressCount,
    closed: closedCount
  }

  return (
    <Grid columns={{ initial: "1", md: "2"}} gap="5">
      <Flex direction="column"  gap="5">
        <IssuesSummary count={count} />
        <IssueChart count={count} />
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues"
}