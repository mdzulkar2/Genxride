import React from 'react';

interface AuthModelProps {
  open: boolean;
  onClose: () => void;
}

const AuthModel: React.FC<AuthModelProps> = ({ open, onClose }) => {
  return (
	<div>
	  AuthModel
	</div>
  );
};

export default AuthModel;