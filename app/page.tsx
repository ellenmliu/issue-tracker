import LatestIssues from "@/app/LatestIssues";
import IssuesSummary from "@/app/IssuesSummary";
import prisma from "@/prisma/client";
import IssueChart from "@/app/IssueChart";

export default async function Home() {
  const openCount = await prisma.issue.count({ where: { status: "OPEN" }});
  const inProgressCount = await prisma.issue.count({ where: { status: "IN_PROGRESS" }});
  const closedCount = await prisma.issue.count({ where: { status: "CLOSED" }});

  return (
    <IssueChart open={openCount} inProgress={inProgressCount} closed={closedCount} />
  )
}
