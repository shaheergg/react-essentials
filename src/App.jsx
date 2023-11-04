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
import { ArrowRight } from "@geist-ui/icons";
import Task from "./components/CheckBox";
function App() {
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];
  const [selectedTasks, setSelectedTasks] = useState([]);
  const selectTask = (task) => {
    if (selectedTasks.includes(task)) {
      setSelectedTasks(selectedTasks.filter((t) => t !== task));
    }
    setSelectedTasks([...selectedTasks, task]);
  };
  console.log(selectedTasks);
  let [isOpen, setIsOpen] = useState(false);

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
  const transferTasks = () => {
    let selected = selectedTasks;
    selected.forEach((task) => {
      task.completed = true;
    });
    setTasks([...selected]);
  };
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
        </Grid>
        <Spacer />
        <Grid cols={5}>
          <GridCell span={2}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Todos</h2>
              <div className="py-2 space-y-2">
                {tasks.map((step, idx) => {
                  return (
                    <div key={idx}>
                      {!step.completed && (
                        <Task selectTask={selectTask} task={step} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </GridCell>
          <GridCell span={1}>
            <div className="flex items-center justify-center p-4">
              <button
                onClick={transferTasks}
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-accent hover:bg-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Transfer
                <ArrowRight size={16} />
              </button>
            </div>
          </GridCell>
          <GridCell span={2}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Done</h2>
              <div className="py-2 space-y-2">
                {tasks.map((step, idx) => {
                  return (
                    <div key={idx}>
                      {step.completed && <Task task={step} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </GridCell>
        </Grid>
      </Container>
    </>
  );
}

export default App;
