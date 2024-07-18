import Card from "@mui/material/Card";

import ShowDataGrid from "./ShowDataGrid";
import useSWR from "swr";
export const fetcher = async (...args) =>
  fetch(...args).then((res) => res.json());

export default function DoProcess({ ids }) {
  // const { data, error } = useSWR(`/api/api.php?dateQuery=${ids}`, fetcher);
  const rows = [
    {
      id: 1,
      location: "GT21",
      date1: "2024-01-01",
      time1: "08:10",
      action: "GT START AS PER ASIR AND FAIL TO START",
      status1: "In Service",
      name1: "جبران حسن اليحيوي",
      flame: "390",
      fsnl: "10:01",
      synch: "10:10",
      note: "",
    },
    {
      id: 2,
      location: "GT27",
      date1: "2024-10-01",
      time1: "22:22",
      action: "GT START AS PER ASIR",
      status1: "In Service",
      name1: "جبران حسن اليحيوي",
      flame: "388",
      fsnl: "22:11",
      synch: "22:20",
      note: "",
    },
    {
      id: 3,
      location: "GT20",
      date1: "2024-06-02",
      time1: "04:15",
      action: "GT TRIP ON LOSS OF FLAME",
      status1: "Shutdown",
      name1: "جبران حسن اليحيوي",
      note: "#2231234876",
    },
    {
      id: 4,
      location: "GT30",
      date1: "2024-06-02",
      time1: "18:15",
      action:
        "gt trip on loss of flame gt trip on loss of flame gt trip on loss of flame gt trip on loss of flame ",
      status1: "Stand By",
      name1: "جبران حسن اليحيوي",
      note: "",
    },
    {
      id: 5,
      location: "SKID#1 SP#1",
      date1: "2024-01-02",
      time1: "18:15",
      action: "START",
      status1: "In Service",
      name1: "جبران حسن اليحيوي",
      note: "",
    },
  ];

  // if (error) {
  //   return <p> {error.message}</p>;
  // }
  // if (!data) {
  //   return <p>Loodings</p>;
  // }
  const renderInput = (
    <Card
      sx={{
        flexGrow: { md: 1 },
        display: { md: "flex" },
        flexDirection: { md: "column" },
      }}
    >
      <ShowDataGrid rows1={rows} />
    </Card>
  );
  return <>{renderInput}</>;
}
