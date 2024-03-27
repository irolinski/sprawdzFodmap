import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function TableAccordion({ Title, Content }: any) {
    return(
        <Accordion className="table-accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                    {Title}
                </AccordionSummary>
                <AccordionDetails>
                    {Content}
                </AccordionDetails>
        </Accordion>
    )
}