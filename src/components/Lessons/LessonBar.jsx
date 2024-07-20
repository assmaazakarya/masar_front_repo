import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Box } from "@mui/material";

const courseSections = [
  { title: "Getting Started", duration: "42min", lessons: 11 },
  { title: "JavaScript Refresher", duration: "1hr 42min", lessons: 25 },
  {
    title: "React Essentials - Components, JSX, Props, State & More",
    duration: "2hr 27min",
    lessons: 40,
  },
  { title: "React Essentials - Deep Dive", duration: "3hr 16min", lessons: 41 },
  {
    title: "React Essentials - Practice Project",
    duration: "54min",
    lessons: 8,
  },
  { title: "Styling React Components", duration: "1hr 55min", lessons: 22 },
  { title: "Debugging React Apps", duration: "1hr 29min", lessons: 7 },
];

function LessonBar() {
  return (
    <Box
      sx={{
        maxHeight: 500,
        overflowY: "auto",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <p className="m-0">course Content</p>
      {courseSections.map((section, index) => (
        <Accordion
          defaultExpanded={false}
          key={index}
          sx={{ boxShadow: "none", margin: 0, padding: 0 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              fontSize: "18px",
              fontWeight: "semibold",
            }}
          >
            {`Section ${index + 1}: ${section.title}`}
          </AccordionSummary>
          <AccordionDetails>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center gap-2 p-2">
                <input
                  id={`default-checkbox${index}`}
                  name="category"
                  type="checkbox"
                  defaultValue=""
                  className="bg-info"
                  style={{
                    accentColor: "black",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <label
                  htmlFor={`default-checkbox${index}`}
                  className="text-black m-0"
                >
                  Welcome to this course
                </label>
              </div>
              <div className="d-flex align-items-center gap-1 ms-2">
                <MdOutlineOndemandVideo />
                <p className="m-0">{section.duration}</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default LessonBar;
