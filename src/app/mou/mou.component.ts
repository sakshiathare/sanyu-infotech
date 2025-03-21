import { Component } from '@angular/core';

@Component({
  selector: 'app-mou',
  templateUrl: './mou.component.html',
  styleUrls: ['./mou.component.css']
})
export class MouComponent {
  mouList = [
    {
      title: 'MOU Done with Pro - Vice Chancellor Dr Ramchandra Pujeri Sir at MIT ADT University Loni Kalbhor Campus, Pune',
      image: 'assets/Images/M1.jpg',
      expanded: false
    },
    {
      title: 'MMOU done With Principal Dr Sayyad sir at Ajeenkya DY Patil School of Engineering, Lohagaon',
      image: 'assets/Images/mou2.jpg',
      expanded: false
    },
    {
      title: 'MOU done with PVG Engineering College, Pune',
      image: 'assets/Images/mou3.jpg',
      expanded: false
    },
    {
      title: 'MOU done with Principal Sir &  TPO Mr Shrikant Patil Sir at JSPM Engineering College, Narhe',
      image: 'assets/Images/mou4.jpg',
      expanded: false
    },
    {
      title: 'MOU done With Principal Dr Milind Rohokale sir at SKN Sinhgad Institute of Technology & Science, Lonavala',
      image: 'assets/Images/mou5.jpg',
      expanded: false
    },
    {
      title: 'MOU done with Dr Banmote sir principal, Dean TPO Dr Nikku Khalsa sir and prof Ram Meghe Institute of Technology and Research BADNERA, Amaravati',
      image: 'assets/Images/mou6.jpg',
      expanded: false
    },
    {
      title: 'MOU done With Principal Dr Sachin Babar sır at Sinhgad Institute of Technology, Lonavala',
      image: 'assets/Images/mou7.jpg',
      expanded: false
    },
    {
      title: 'MOU done with Dr Thakare sir, TPO at Sipna College of Engineering, Amaravati',
      image: 'assets/Images/mou8.jpg',
      expanded: false
    },
    {
      title: 'MOU done with principal sir and TPO Mr. Manwar sir Takshshila Institute of Engineering and Technology, Darapur',
      image: 'assets/Images/mou9.jpg',
      expanded: false
    },
    {
      title: 'MOU done with Dr Sagar Jirapure sir principal Rajendra Gode Institute of Technology and Research',
      image: 'assets/Images/mou10.jpg',
      expanded: false
    },
    {
      title: 'MOU done with principal Dr Harkut sır, TPO Dr. Thorat sır and prof Ram Meghe College of Engineering and management Badnera, Amaravati',
      image: 'assets/Images/mou11.jpg',
      expanded: false
    }
  ];

  toggleImage(item: any) {
    
    this.mouList.forEach(mou => {
      if (mou !== item) mou.expanded = false;
    });
    
    
    item.expanded = !item.expanded;
  }
}
