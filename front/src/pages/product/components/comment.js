import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const CommentMainWrap = styled.div`
  padding-top: 25px;
`
const CommentSubWrap = styled.div`
  display: flex;
  width: 100%;
`
const ProfileWrap = styled.a`
  display: block;
  margin-right: 15px;
`
const InfoWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
`
const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: rgb(136, 136, 136);
  margin-bottom: 10px;
  align-items: center;
`
const Middle = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
  white-space: pre-wrap;
`
const Bottom = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const ShopName = styled.div`
  color: #888888;
  font-size: 14px;
`
const UploadTime = styled.div`
  font-size: 13px;
  color: rgb(204, 204, 204);
`
const BtnWrap = styled.div`
color: rgb(136, 136, 136);
font-size: 13px;
display: flex;
align-items: unset;
margin-right: 25px;
position: relative;
cursor: pointer;
`


const Comment = ({ data, setComments }) => {
  const onClickDelete = async () => {
    const confirm = window.confirm('댓글을 삭제하시겠습니까?')
    if (confirm) {
      try {
        await axios.delete(`/comment?id=${data._id}`)
        setComments(prev => prev.filter(
          (v) => v._id !== data._id
        ))
        alert('댓글이 삭제되었습니다.')
      } catch (err) {
        alert('댓글 삭제를 실패했습니다.')
      }
    }
  }
  return (
    <CommentMainWrap>
      <CommentSubWrap>
        <ProfileWrap>
          <img src="thunder-profile.png" width="48" height="48" alt="프로필 이미지" style={{ borderRadius: "50%" }} />
        </ProfileWrap>
        <InfoWrap>
          <Top>
            <ShopName>{data.writer.nickname}</ShopName>
            <UploadTime>방금 전</UploadTime>
          </Top>
          <Middle>{data.content}</Middle>
          <Bottom>
            <BtnWrap onClick>
              <img src="comment.png" width="17" height="14" alt="댓글달기 버튼 이미지" style={{ marginRight: "4px" }} />
              댓글달기
            </BtnWrap>
            <BtnWrap onClick={onClickDelete}>
              <img src="trashcan.png" width="17" height="14" alt="삭제하기 버튼 이미지" style={{ marginRight: "4px" }} />
              삭제하기
            </BtnWrap>
          </Bottom>
        </InfoWrap>
      </CommentSubWrap>
    </CommentMainWrap>
  );
}

export default Comment;

