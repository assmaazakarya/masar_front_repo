import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const lessons = [
  {
    label: "Introduction to project management",
    duration: "04:50",
    progress: 35,
    currentTime: "01:41",
  },
  {
    label: "Start learning with basics",
    duration: "06:50",
    progress: 10,
    currentTime: "00:00",
  },
  {
    label: "How to manage times and Priority",
    duration: "11:40",
    progress: 20,
    currentTime: "00:00",
  },
];

function Lessons() {
  return (
    <div className="w-100 flex ">
      <Box sx={{ maxWidth: 500, mt: "10px", padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Course Completion
        </Typography>
        <Box
          sx={{
            maxHeight: 500,
            overflowY: "auto",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Stepper activeStep={true} orientation="vertical">
            {lessons.map((lesson, index) => (
              <Step key={index} active={lesson.progress > 0}>
                <StepLabel></StepLabel>
                <StepContent>
                  <Box
                    sx={{
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Typography variant="body1">{lesson.label}</Typography>
                      <Typography variant="body2">{lesson.duration}</Typography>
                    </div>
                    <Typography variant="body2">
                      {lesson.currentTime} / {lesson.duration}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={lesson.progress}
                      sx={{ mt: 2 }}
                    />
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </div>
  );
}

export default Lessons;
