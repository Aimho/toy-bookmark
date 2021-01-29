import styled, { css } from "styled-components";
import {
  Avatar,
  ButtonBase,
  CircularProgress,
  Grid,
  Paper,
} from "@material-ui/core";
import { CloseRounded, LockRounded } from "@material-ui/icons";
import colorSet from "../../styles/colorSet";

export const MuiAvatar = styled(Avatar)`
  img {
    background-color: ${colorSet.gray000};
  }
`;

const iconButtonPosition = css`
  top: 4px;
  right: 4px;
  position: absolute;
`;

export const MuiCircleProgress = styled(CircularProgress)`
  ${iconButtonPosition}

  color: ${colorSet.gray900};
`;

export const MuiClose = styled(CloseRounded)`
  ${iconButtonPosition}

  width: 16px;
  height: 16px;
  color: ${colorSet.gray600};

  &:hover {
    color: ${colorSet.gray900};
  }
`;

export const MuiPrivate = styled(LockRounded)`
  ${iconButtonPosition}
  top: -8px;
  right: -8px;

  padding: 2px;
  width: 16px;
  height: 16px;
  color: ${colorSet.gray900};
`;

export const FaviconContainer = styled.div`
  position: relative;
`;

export const MuiPaper = styled(Paper)`
  width: 100%;
  display: flex;
  padding: 24px;
  padding-bottom: 8px;
  position: relative;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.3s;
  background-color: ${colorSet.backgroundLight};
  &:hover {
    background-color: ${colorSet.backgroundBase};
  }

  img {
    margin-bottom: 8px;
    &.resize {
      width: 32px;
      height: 32px;
    }
  }
`;

export const MuiButtonBase = styled(ButtonBase)`
  width: 100%;
`;
