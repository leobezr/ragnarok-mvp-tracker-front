<script setup lang="ts">
import { ref, computed } from "vue";
import { mvpMock } from "./__mocks__/mvp-list.mock";
import { Asyncio } from "@/lib/loader";
import { Creature } from "@/types/creature";
import MvpTracker from "./components/tracker/MvpTracker.vue";
import TrackerEditor from "./components/editor/TrackerEditor.vue";
import "./scss/_mvp-tracker.scss";

const activeMvpId = ref<string>("-1");
const mvpBeingEdited = ref<string>("");
const mvpEditorIsOpened = ref(false);
const asyncio = Asyncio();

const mvpList = computed(() => {
  return mvpMock;
});

const mvpBeingEditedData = computed(() => {
  return mvpList.value.find((creature) => creature.id === mvpBeingEdited.value);
});

const saveMvpModification = (timer: number) => {
  asyncio.await(async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        closeSettingsEditor();
        resolve(timer);
      }, 1500);
    });
  });
};

const editMvpTimer = (mvpId: string) => {
  mvpBeingEdited.value = mvpId;
  mvpEditorIsOpened.value = true;
};

const closeSettingsEditor = () => {
  mvpBeingEdited.value = "";
  mvpEditorIsOpened.value = false;
};

const restartCreatureTimer = (creature: Creature) => {
  asyncio.await(async () => {
    creature.lastKilled = Date.now();
    console.log("save changes", creature);
    editMvpTimer(creature.id);
  });
};
</script>

<template>
  <div id="mvpTrackerRoot">
    <h1>Tracker</h1>

    <div class="containMvpBoxes">
      <mvp-tracker
        v-model="activeMvpId"
        @edit="editMvpTimer"
        @restart="restartCreatureTimer"
        :list="mvpList"
      />
    </div>

    <tracker-editor
      v-if="mvpBeingEditedData"
      v-model="mvpEditorIsOpened"
      @close="closeSettingsEditor"
      @save="saveMvpModification"
      :key="mvpBeingEdited"
      :creature="mvpBeingEditedData"
      :loading="asyncio.loading"
    />
  </div>
</template>
