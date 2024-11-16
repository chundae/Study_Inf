# 감정일기장 Final Project

## 요구사항
1. "/" : 모든 일기를 조회하는 메인페이지
2. "/new" : 새로운 일기를 작성하는 페이지
3. "/diary" : 일기를 상세히 조회하는 페이지


## 기능
1. "/"에서 날짜와 생성했던 다이어리 데이터를 식별하도록 함.
2. 수정 페이지에서 이모션과 내용 등 다이어리데이터 수정
3. 메인페이지에서 날짜 필터링을 통해 정렬기능

>12.11) Home 페이지 구현하기 2. 기능
>Sort 메서드 비교함수 관련 아티클
>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


## 디렉토리

### components
- Button.jsx
  - 각 페이지에 적용할 Button 기능을 수행하기 위한 컴포넌트
  - props => text(버튼 명), type(버튼 색상), onClick(콜백함수)
  - props.type => "NEGATIVE"-부정을 의미해 빨간 버튼, "POSITIVE"-긍정을 의미 초록버튼
<br>
- Header.jsx
  - 페이지의 상단 부분을 설정하는 컴포넌트
  - props => title(제목), left/rightChild(좌/우 배치할 요소)
  - 좌우에는 주로 Button컴포넌트를 전달 받아 페이지 이동버튼을 구현함.


- DiaryList.jsx
  - HOME부분에 Diary Section을 담당하는 부분
  - props => data(다이어리의 데이터를 배열형태로 받음)
  - 정렬기능을 수행하기위해 `getSortedData`함수를 통해 `sortedData`형태로 변환해 DiaryItem.jsx로 전달
  - 이후 map메서드를 통해 반복적으로 DiaryItem으로 데이터 전송
  ```javascript
      //정렬을 위한 함수 선언 1. select 선택이되면 onChangeSortType에서 value값을 가져와 sortType할당
    //2. 할당된 데이터를 비교해 새로운 sortedData를 생성
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };
  ```

- DiaryItem.jsx
  - DiaryList에서 받은 Diary의 데이터를 반복해서 출력
  - props => {id, createdDate, emotionId, content}형태로 스프레드 연산자 전송된 데이터를 구조분해 할당으로 배치
  - Button 컴포넌트를 불러와 콜백함수로 `()=> nav(`/nav/${id}`)` 를 전달해 수정페이지로 이동 함수 전달
    

- EmotionItem.jsx
  - Editor컴포넌트에서 사용되는 emotion리스트를 위치하기위한 컴포넌트
  - props => {emotionId, emotionName, isSelected, onClick}
  - `getEmotionImage`함수를 사용해 이미지 불러옴
  - isSelected Props를 사용해 선택되어있는 항목을 확인해 하이라이트로 색상을 변경시킴. 자세한건 css 참고<br>
  
    
- Editor.jsx
  - 수정페이지를 렌더링하기 위한 컴포넌트
  - props => {initData, onSubmit}
  - 데이터를 수정하기위해 기존데이터`initdata`를 배치시키고 input State를 생성해 변경되는 사항을 State형태로 저장
  - useEffect 사용해 `initdata`가 변경되면 리렌더링을 진행
  - `onChangeInput` / `onSubmitButtonClick` 함수를 사용해 수정된 데이터를 배치 및 State 저장<br>
  >양이 많아서 해당 컴포넌트 확인.
    
- Viewer.jsx
  - 다이어리 상세페이지를 렌더링하기 위한 컴포넌트
  - props => {emotionId, content}
  - emotionList util 함수를 불러와 emotionId와 일치하는 이름과 색상을 배치.
    <br>

### Pages

- Home.jsx
  - 어플리케이션이 로딩되면 제일 처음 렌더링 되는 페이지이다.
  - Component => Header / Button / DiaryList
  ```javascript
  //사용 State와 Context
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const monthlyData = getMonthlyData(pivotDate, data);
  //월을 넘기는 함수
      const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };

    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };
    //다이어리 date를 받아와서 월별로 필터링을 진행하는 함수 
    const getMonthlyData = (pivotDate, data) => {
        const beginTime = new Date(
            pivotDate.getFullYear(),
            pivotDate.getMonth(),
            1,0,0,0,).getTime(); //월의 시작
    
        const endTime = new Date(
            pivotDate.getFullYear(),
            pivotDate.getMonth() + 1,
            0,23,59,59).getTime(); //월의 마지막

        return data.filter(
            (item) => beginTime <= item.createdDate && item.createdDate <= endTime
        );
    };
  ```
  

- Diary.jsx
  - 일기의 상세페이지를 렌더링하기 위한 페이지
  - Component => Header / Button / Viewer 사용
  ```javascript
    //useParams를 사용해 페이지의 url에 할당되어 있는 파라미터를 가져옴
    const params = useParams();
  //페이지 이동을 위해 useNavigate() 사용
    const nav = useNavigate();
  //커스텀 훅을 생성해 일기 데이터를 가져와 렌더링 진행하기 위핸 객체 생성해
    const curDiaryItem = useDiary(params.id)
  //구조분해 할당을 통해 Viewer 컴포넌트로 데이터 전달
    const {createdDate, emotionId, content} = curDiaryItem;
  ```
  

- New.jsx
  - 새로운 일기를 생성하는 페이지
  - Component => Header / Button / Editor 사용
  ```javascript
  //App.jsx에서 Context를 불러와 함수 사용
  const {onCreate} = useContext(DiaryDispatchContext);
  
  //Editor.jsx에서 사용되는 onSubmit함수를 실행하기 위한 함수
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', {replace: true});
    };
  ```
  

- Edit.jsx
  - 일기 데이터를 수정하기 위한 페이지
  - Component => Header / Button / Editor
  ```javascript
    //App.jsx에서 데이터를 변경하는 함수 Context로 가져옴
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  
    //일기를 삭제하는 함수
    const onClickDelete = () => {
    let isDelete = window.confirm("Are you sure you want to delete?")
    if (isDelete) {
        onDelete(params.id);
        nav('/', {replace: true});
        }
    }
  //Editor는 New / Edit페이지에서 사용되기 때문에 다른 onSubmit함수를 생성해 사용
      const onSubmit = (input) => {
        if (window.confirm("Are you sure you want to delete?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        };
        //수정이후 메인페이지 이동 및 뒤로가기 제한 설정
        nav('/', {replace: true});
    }
   ```
  


### Custom Hooks

- useDiary.jsx
  - 다양한 페이지에서 일기 객체를 조회하고 할당하기 위한 메서드들을 Hook을 생성해 사용
  ```javascript
  //데이터를 App.jsx에서 불러와 State로 관리
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
  
  //useEffect를 사용해 원하는 id를 가진 일기를 조회하고 curDiaryItem으로 설정
      useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        if (!currentDiaryItem) {
            alert("존재하지 않는 일기입니다.")
            nav('/', {replace: true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id, data])
  ```
  

- usePageTitle.jsx
  - 페이지를 렌더링을 진행할때 최상단 탭 title명을 설정하기 위한 hook
  ```javascript
  const usePageTitle = (title) => {
  useEffect(()=>{
  //돔 요소를 가져오는 변수명 $추가
  const $title = document.getElementsByTagName("title")[0]
  $title.innerText = title
  },[title])
  }
  ```

## Util Method

- get-emotion-image.js / constants.js
  - 두개의 js함수는 각각 감정 이미지를 불러오는 함수와 감정에 할당한 이름을 불러오는 함수이다.
  - `get-emotin-image`는 이모션 아이디를 props로 전달받아 이미지를 불러오는 함수.
  - `constant`는 이모션에 특징에 따른 이름을 항당해 객체형대로 리턴하는 함수.

- getStringedDate.js
  - `targetDate`를 Props로 전달 받아 10미만의 월 / 일 이면 앞에 0을 붙혀주는 함수이다.
