// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);
