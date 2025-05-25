import { Component } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topic',
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
  id = 0
  constructor(private _topicService: TopicService) {

  }
  ngOnInit(): void {
  }
}