import styled from '@emotion/styled'

type ContainerProps = {
  bg: string
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 9rem;
  background: ${({ bg }) => bg};
  color: #fff;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

export const Img = styled.img`
  position: absolute;
  z-index: 3;
  top: -3.4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 7.3rem;
  pointer-events: none;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`

export const Info = styled.div`
  padding: 0.8rem;
  font-size: 0.9rem;
  line-height: 1.3;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;

  .type-wrapper {
    display: flex;
    gap: 0.2rem;

    span {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 1.3rem;

      padding: 0.2rem 0.7rem;
      font-size: 0.8rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
