import Container from "./components/Container";
import "./App.css";
import Header from "./components/Header";
import Grid from "./layouts/Grid";
import Spacer from "./components/Spacer";
import GridCell from "./layouts/GridCell";
import Select from "./components/Select";
import { useState } from "react";
import Toggle from "./components/Toggle";
import Accordian from "./components/Accordian";
import MyDialog from "./components/Dialog";
import Radio from "./components/RadioGroup";
import Tabs from "./components/Tabs";
import { motion } from "framer-motion";
function App() {
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];
  let tabs = [
    { id: "world", label: "World", content: "Whole world" },
    { id: "ny", label: "N.Y.", content: "New York" },
    { id: "business", label: "Business", content: "Business" },
    { id: "tech", label: "Tech", content: "Technology" },
    { id: "sports", label: "Sports", content: "Sports" },
    { id: "arts", label: "Arts", content: "Arts" },
    { id: "science", label: "Science", content: "Science" },
  ];

  let [isOpen, setIsOpen] = useState(false);
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const plans = [
    {
      name: "Startup",
      ram: "12GB",
      cpus: "6 CPUs",
      disk: "160 GB SSD disk",
    },
    {
      name: "Business",
      ram: "16GB",
      cpus: "8 CPUs",
      disk: "512 GB SSD disk",
    },
    {
      name: "Enterprise",
      ram: "32GB",
      cpus: "12 CPUs",
      disk: "1024 GB SSD disk",
    },
  ];

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Ideation",
      completed: false,
    },
    {
      id: 2,
      content: "Requirement Engineering",
      completed: false,
    },
    {
      id: 3,
      content: "Scope Defining",
      completed: false,
    },
    {
      id: 4,
      content: "Wireframing",
      completed: false,
    },
    {
      id: 5,
      content: "Development",
      completed: false,
    },
    {
      id: 6,
      content: "Testing",
      completed: false,
    },
    {
      id: 7,
      content: "Deployment",
      completed: false,
    },
    {
      id: 8,
      content: "Maintenance",
    },
  ]);

  const [selected, setSelected] = useState(people[0]);
  const [enabled, setEnabled] = useState(false);
  const [selectPlan, setSelectPlan] = useState(plans[0]);

  return (
    <>
      <Header />
      <Container>
        <Spacer />
        <Grid>
          <GridCell>
            <div className="p-4">
              <Select
                selected={selected}
                setSelected={setSelected}
                data={people}
              />
            </div>
          </GridCell>
          <GridCell>
            <div className="flex items-center justify-center p-4">
              <Toggle
                enabled={enabled}
                setEnabled={setEnabled}
                label={"setting"}
              />
            </div>
          </GridCell>
          <GridCell span={2}>
            <div className="p-4 ">
              <Accordian
                title={"Is this available on Netflix?"}
                content={
                  "Yes this movie is available on netflix, you should watch it, it is very good and heartwarming story."
                }
              />
            </div>
          </GridCell>
          <GridCell span={1}>
            <div className="p-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-accent hover:bg-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                onClick={openModal}
              >
                Open Dialog
              </button>
              <MyDialog closeModal={closeModal} isOpen={isOpen} />
            </div>
          </GridCell>
          <GridCell span={3}>
            <div className="p-4">
              <Radio
                plans={plans}
                selected={selectPlan}
                setSelected={setSelectPlan}
              />
            </div>
          </GridCell>
          <GridCell span={4}>
            <Tabs
              tabs={tabs}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <div className="">
              {tabs.map((tab) => {
                return (
                  tab.id === activeTab && (
                    <motion.div
                      key={tab.id}
                      className="p-2 text-gray-600"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      transition={{ duration: 0.4 }}
                    >
                      {tab.content}
                    </motion.div>
                  )
                );
              })}
            </div>
          </GridCell>
        </Grid>

        <Spacer />
      </Container>
    </>
  );
}

export default App;
