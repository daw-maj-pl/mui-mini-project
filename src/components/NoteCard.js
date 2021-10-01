import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Typography from '@material-ui/core/Typography';

export default function NoteCard({ note }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
