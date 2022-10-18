import PropTypes from 'prop-types';
import { FriendListItem, Avatar, Name } from './FriendList.styled';
import { VscCircleLargeFilled } from 'react-icons/vsc';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      <div>
        <VscCircleLargeFilled style={{ fill: isOnline ? 'green' : 'red' }} />
      </div>
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </FriendListItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
