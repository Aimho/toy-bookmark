import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import { userState } from "../../recoils/userState";
import { renderState } from "../../recoils/renderState";

import {
  useDeleteItemMutation,
  useGetUserItemQuery,
} from "../../generated/graphql";
import DetailPresenter from "./DetailPresenter";

function Detail() {
  const { id } = useParams() as any;
  const { enqueueSnackbar } = useSnackbar();

  const { isAuthCheck } = useRecoilValue(renderState);
  const m_userState = useRecoilValue(userState);
  const isOwner = id === m_userState.id ? true : false;

  const { data, error, refetch } = useGetUserItemQuery({
    variables: { user_id: id, is_private: !isOwner ? false : null },
  });

  useEffect(() => {
    refetch();
  }, [isOwner, refetch]);

  const [deleteItem, deleteItemState] = useDeleteItemMutation();
  const onDelete = (name: string, id: string) => {
    if (!isOwner) return null;
    deleteItem({ variables: { id } })
      .then(() =>
        enqueueSnackbar(`${name} 북마크 삭제되었습니다.`, {
          variant: "success",
        })
      )
      .catch(() =>
        enqueueSnackbar(`${name} 북마크 삭제 실패하였습니다.`, {
          variant: "error",
        })
      )
      .finally(refetch);
  };

  if (error?.message) {
    enqueueSnackbar(
      `북마크 데이터를 불러오는데 실패하였습니다. 잠시 후 다시 시도해주세요`,
      { variant: "error" }
    );
  }

  return (
    <DetailPresenter
      isAuthCheck={isAuthCheck}
      isOwner={isOwner}
      refetch={refetch}
      onDelete={onDelete}
      deleteLoading={deleteItemState.loading}
      items={data?.item}
    />
  );
}

export default Detail;